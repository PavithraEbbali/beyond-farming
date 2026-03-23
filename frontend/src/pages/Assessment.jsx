import { useState } from 'react'
import { AlertCircle, Leaf, Globe, Calendar, Zap, FileText } from 'lucide-react'
import LoadingSpinner from '../components/LoadingSpinner'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

const DEMO_DATA = {
  crop: 'Grapes',
  country: 'EU',
  location: 'Andhra Pradesh',
  lastChemical: 'Carbendazim',
  sprayDate: '2026-03-10',
  harvestDate: '2026-03-15',
  farmingMethod: 'Conventional',
  notes: 'Standard vineyard management, routine fungicide application',
  traceabilityAvailable: true,
  certificationGoal: '',
}

const FormSection = ({ title, icon: Icon, children }) => (
  <div className="card-premium">
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="w-6 h-6 text-farming-green flex-shrink-0" />}
      <h3 className="card-title">{title}</h3>
    </div>
    <div className="space-y-5">
      {children}
    </div>
  </div>
)

const FormField = ({ label, hint, required = false, children }) => (
  <div>
    <label className="label-text">
      {label}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>
    {children}
    {hint && <p className="label-hint">{hint}</p>}
  </div>
)

export default function AssessmentPage({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    crop: '',
    country: '',
    location: '',
    lastChemical: '',
    sprayDate: '',
    harvestDate: '',
    farmingMethod: 'Conventional',
    notes: '',
    traceabilityAvailable: false,
    certificationGoal: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleLoadDemo = () => {
    setFormData(DEMO_DATA)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.crop.trim()) newErrors.crop = 'Crop name is required'
    if (!formData.country.trim()) newErrors.country = 'Target market is required'
    if (!formData.location.trim()) newErrors.location = 'Farm location is required'
    if (!formData.lastChemical.trim()) newErrors.lastChemical = 'Last chemical used is required'
    if (!formData.sprayDate) newErrors.sprayDate = 'Spray date is required'
    if (!formData.harvestDate) newErrors.harvestDate = 'Harvest date is required'
    
    const sprayDate = new Date(formData.sprayDate)
    const harvestDate = new Date(formData.harvestDate)
    if (harvestDate <= sprayDate) {
      newErrors.harvestDate = 'Harvest date must be after spray date'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-farming-darker">
        <LoadingSpinner fullPage />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <div className="section-container py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <SectionHeader
            title="Export Readiness Assessment"
            subtitle="Provide details about your crop, market, and farming practices. Our AI will analyze compliance risks."
            accent={false}
          />
        </div>

        {/* Main Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Crop & Market Details */}
            <FormSection title="Crop & Market Details" icon={Leaf}>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Crop Name" hint="e.g., Grapes, Tomatoes, Strawberries" required>
                  <input
                    type="text"
                    name="crop"
                    value={formData.crop}
                    onChange={handleChange}
                    placeholder="What crop do you grow?"
                    className={`input-field-premium ${errors.crop ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.crop && <p className="text-red-400 text-xs mt-1">{errors.crop}</p>}
                </FormField>

                <FormField label="Target Export Market" hint="e.g., EU, USA, UK, Japan, Singapore" required>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Which country/region?"
                    className={`input-field-premium ${errors.country ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
                </FormField>
              </div>
            </FormSection>

            {/* Section 2: Farm & Location */}
            <FormSection title="Farm Information" icon={Globe}>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Farm Location" hint="State/Province/Region" required>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Andhra Pradesh, Karnataka"
                    className={`input-field-premium ${errors.location ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
                </FormField>

                <FormField label="Farming Method">
                  <select
                    name="farmingMethod"
                    value={formData.farmingMethod}
                    onChange={handleChange}
                    className="select-field"
                  >
                    <option value="Conventional">Conventional</option>
                    <option value="Natural">Natural</option>
                    <option value="Organic">Organic (Certified)</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                </FormField>
              </div>
            </FormSection>

            {/* Section 3: Input & Spray History */}
            <FormSection title="Input & Spray History" icon={Zap}>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Last Chemical / Input Used" hint="e.g., Carbendazim, Chlorpyrifos, Neem Oil" required>
                  <input
                    type="text"
                    name="lastChemical"
                    value={formData.lastChemical}
                    onChange={handleChange}
                    placeholder="Most recent chemical applied"
                    className={`input-field-premium ${errors.lastChemical ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.lastChemical && <p className="text-red-400 text-xs mt-1">{errors.lastChemical}</p>}
                </FormField>

                <FormField label="Spray Date" required>
                  <input
                    type="date"
                    name="sprayDate"
                    value={formData.sprayDate}
                    onChange={handleChange}
                    className={`input-field-premium ${errors.sprayDate ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.sprayDate && <p className="text-red-400 text-xs mt-1">{errors.sprayDate}</p>}
                </FormField>
              </div>

              <FormField label="Expected Harvest Date" hint="When do you plan to harvest?" required>
                <input
                  type="date"
                  name="harvestDate"
                  value={formData.harvestDate}
                  onChange={handleChange}
                  className={`input-field-premium w-full md:w-1/2 ${errors.harvestDate ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.harvestDate && <p className="text-red-400 text-xs mt-1">{errors.harvestDate}</p>}
              </FormField>
            </FormSection>

            {/* Section 4: Documentation & Certification */}
            <FormSection title="Documentation & Certification" icon={FileText}>
              <FormField label="Traceability Records Available?" hint="Do you have digital spray logs, farm records, or documentation?">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="traceability"
                      checked={formData.traceabilityAvailable === true}
                      onChange={() => setFormData(prev => ({ ...prev, traceabilityAvailable: true }))}
                      className="w-5 h-5 accent-farming-green"
                    />
                    <span className="text-farming-text group-hover:text-farming-green transition-colors">Yes, I have records</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="traceability"
                      checked={formData.traceabilityAvailable === false}
                      onChange={() => setFormData(prev => ({ ...prev, traceabilityAvailable: false }))}
                      className="w-5 h-5 accent-farming-green"
                    />
                    <span className="text-farming-text group-hover:text-farming-green transition-colors">No records</span>
                  </label>
                </div>
              </FormField>

              <FormField label="Certification Goal (Optional)" hint="Which certification are you targeting?">
                <input
                  type="text"
                  name="certificationGoal"
                  value={formData.certificationGoal}
                  onChange={handleChange}
                  placeholder="e.g., GlobalGAP, Organic, Fair Trade, Rainforest Alliance"
                  className="input-field-premium"
                />
              </FormField>
            </FormSection>

            {/* Section 5: Additional Notes */}
            <FormSection title="Additional Information">
              <FormField label="Any additional details or concerns?" hint="Tell us about your farming practices, concerns, or special circumstances">
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g., Recently switched to organic, concerned about specific market..."
                  rows="4"
                  className="input-field-premium resize-none"
                />
              </FormField>
            </FormSection>

            {/* Info Panel */}
            <div className="bg-glass-effect border border-farming-border-light rounded-xl p-5 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-farming-green flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-farming-text mb-1">About This Assessment</p>
                <p className="text-sm text-farming-text-muted">
                  Our AI analyzes your data against 120+ export markets' compliance requirements. Results are generated in seconds and provide actionable  insights for export success. Your data is encrypted and never shared.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
              >
                Analyze Export Readiness
              </Button>
              <Button
                type="button"
                onClick={handleLoadDemo}
                variant="secondary"
                size="lg"
                fullWidth
              >
                Load Demo Data
              </Button>
            </div>

            <p className="text-center text-xs text-farming-text-muted">
              ✓ Takes ~2 minutes  •  ✓ 100% Secure  •  ✓ No signup required
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

