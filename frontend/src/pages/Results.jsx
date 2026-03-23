import { AlertTriangle, CheckCircle2, Clock, FileText, Globe, Lightbulb, ArrowRight, Download, RotateCcw } from 'lucide-react'
import ScoreRing from '../components/ui/ScoreRing'
import StatPill from '../components/ui/StatPill'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const getRiskLevelColor = (level) => {
  switch (level) {
    case 'High':
      return 'red'
    case 'Medium':
      return 'yellow'
    case 'Low':
      return 'green'
    default:
      return 'blue'
  }
}

export default function ResultsPage({ results, formData, onNewAssessment }) {
  if (!results) {
    return <div className="text-center py-16">No results available</div>
  }

  const getStatusConfig = (status) => {
    switch (status) {
      case 'Ready':
        return {
          badge: 'badge-status-ready',
          icon: CheckCircle2,
          color: 'text-green-400',
          message: 'Your batch is ready for export',
        }
      case 'At Risk':
        return {
          badge: 'badge-status-at-risk',
          icon: AlertTriangle,
          color: 'text-yellow-400',
          message: 'Review risks and recommendations',
        }
      case 'Not Ready':
        return {
          badge: 'badge-status-not-ready',
          icon: AlertTriangle,
          color: 'text-red-400',
          message: 'Significant compliance gaps',
        }
      default:
        return {
          badge: 'badge bg-gray-700',
          icon: FileText,
          color: 'text-gray-300',
          message: 'Assessment complete',
        }
    }
  }

  const statusConfig = getStatusConfig(results.status)
  const StatusIcon = statusConfig.icon

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <div className="section-container py-12">
        {/* Hero Status Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-gradient-to-br from-farming-card via-farming-accent to-farming-card border border-farming-border-light rounded-2xl p-8 md:p-12 shadow-card-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Score Ring */}
              <div className="flex justify-center md:justify-start">
                <ScoreRing score={results.score} size="xl" animated={true} />
              </div>

              {/* Status & Message */}
              <div className="col-span-2 space-y-6">
                {/* Status Badge */}
                <div className="flex items-center gap-4">
                  <div className={`${statusConfig.badge}`}>
                    {results.status}
                  </div>
                  <div>
                    <p className="text-sm text-farming-text-muted">Export Status</p>
                    <p className="text-lg font-semibold text-farming-text">{statusConfig.message}</p>
                  </div>
                </div>

                {/* Summary Text */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-farming-text-muted">ASSESSMENT SUMMARY</p>
                  <p className="text-lg text-farming-text leading-relaxed">
                    {results.status === 'Ready'
                      ? `Your ${formData.crop} meets all compliance requirements for export to ${formData.country}.`
                      : results.status === 'At Risk'
                      ? `Your ${formData.crop} shows compliance risks for ${formData.country} export. Address highlighted alerts before market entry.`
                      : `Your ${formData.crop} is not ready for ${formData.country} export. Significant gaps need resolution.`}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center gap-8 pt-4 border-t border-farming-border-light">
                  <div>
                    <p className="text-xs text-farming-text-muted">Target Market</p>
                    <p className="font-semibold text-farming-text">{formData.country}</p>
                  </div>
                  <div>
                    <p className="text-xs text-farming-text-muted">Crop</p>
                    <p className="font-semibold text-farming-text">{formData.crop}</p>
                  </div>
                  <div>
                    <p className="text-xs text-farming-text-muted">Farm Location</p>
                    <p className="font-semibold text-farming-text">{formData.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Column - Main Insights */}
          <div className="lg:col-span-2 space-y-6">
            {/* Compliance Status Card */}
            <Card variant="premium">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-farming-green flex-shrink-0" />
                <h2 className="card-title">Compliance Status</h2>
              </div>
              <p className="body-text">
                {results.status === 'Ready'
                  ? `Excellent news! Your ${formData.crop} batch demonstrates full compliance with ${formData.country} export standards. All residue limits are satisfied and documentation requirements are met.`
                  : results.status === 'At Risk'
                  ? `Your batch shows potential compliance risks based on recent spray timing and documentation status. Review recommendations carefully and allow adequate waiting periods before export.`
                  : `Significant compliance gaps exist that require attention. Consider implementing the recommended actions before attempting export to prevent rejection.`}
              </p>
            </Card>

            {/* Risk Alerts */}
            {results.alerts && results.alerts.length > 0 && (
              <Card variant="premium">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <h2 className="card-title">Risk Alerts</h2>
                </div>
                <div className="space-y-3">
                  {results.alerts.map((alert, index) => (
                    <div key={index} className="alert-card alert-warning">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{alert}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Recommended Actions */}
            <Card variant="premium">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-farming-green flex-shrink-0" />
                <h2 className="card-title">Recommended Actions</h2>
              </div>
              <p className="body-text-sm mb-6">Take these steps to ensure export success:</p>
              <div className="space-y-3">
                {results.recommendations && results.recommendations.length > 0 ? (
                  results.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg transition-all hover:bg-glass-light">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-farming-green to-farming-green-dark text-farming-darker flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <p className="text-farming-text pt-1">{rec}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-farming-text-muted">No specific action items needed.</p>
                )}
              </div>
            </Card>

            {/* Traceability Summary */}
            <Card variant="premium">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-farming-green flex-shrink-0" />
                <h2 className="card-title">Traceability Summary</h2>
              </div>
              {results.traceabilitySummary && (
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: 'Crop', value: results.traceabilitySummary.crop },
                    { label: 'Target Market', value: results.traceabilitySummary.market },
                    { label: 'Last Input', value: results.traceabilitySummary.lastInput },
                    { label: 'Spray Date', value: results.traceabilitySummary.sprayDate },
                    { label: 'Expected Harvest', value: results.traceabilitySummary.harvestDate },
                    { label: 'Farming Method', value: results.traceabilitySummary.farmingMethod },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-glass-light border border-farming-border-light">
                      <p className="text-xs font-semibold text-farming-text-muted mb-1">{item.label}</p>
                      <p className="text-sm font-semibold text-farming-text">{item.value}</p>
                    </div>
                  ))}
                  <div className="md:col-span-2 p-4 rounded-lg bg-glass-light border border-farming-border-light">
                    <p className="text-xs font-semibold text-farming-text-muted mb-1">Documentation Status</p>
                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        results.traceabilitySummary.documentationStatus === 'Complete'
                          ? 'bg-green-900 bg-opacity-50 text-green-200'
                          : results.traceabilitySummary.documentationStatus === 'Partial'
                          ? 'bg-yellow-900 bg-opacity-50 text-yellow-200'
                          : 'bg-red-900 bg-opacity-50 text-red-200'
                      }`}>
                        {results.traceabilitySummary.documentationStatus}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Timeline */}
            <Card variant="premium">
              <h2 className="card-title mb-6 flex items-center gap-3"><Clock className="w-5 h-5 text-farming-green" />Export Readiness Timeline</h2>
              <div className="space-y-6">
                {[
                  { date: formData.sprayDate, label: 'Input Applied', desc: `${formData.lastChemical} spray completed` },
                  { date: 'Waiting Period', label: 'Pre-Harvest Window', desc: 'Residue breakdown continues' },
                  { date: formData.harvestDate, label: 'Harvest Window', desc: 'Planned harvest date' },
                  { date: 'Export Ready', label: 'Market Entry', desc: `Status: ${results.status}` },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-farming-green shadow-glow"></div>
                      {idx < 3 && <div className="w-1 h-12 bg-gradient-to-b from-farming-green to-farming-border mt-2"></div>}
                    </div>
                    <div className="pb-6">
                      <p className="text-xs font-bold text-farming-text-muted mb-1">{item.date}</p>
                      <p className="font-semibold text-farming-text">{item.label}</p>
                      <p className="text-sm text-farming-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Secondary Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Buyer Confidence */}
            <Card variant="premium">
              <h3 className="card-title mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-farming-green" />
                Buyer Confidence
              </h3>
              {results.buyerConfidence && (
                <div className="space-y-4">
                  {[
                    { key: 'traceability', label: 'Traceability', levels: ['Missing', 'Partial', 'Strong'] },
                    { key: 'residueRisk', label: 'Residue Risk', levels: ['High', 'Medium', 'Low'] },
                    { key: 'certificationReadiness', label: 'Certification', levels: ['Basic', 'Moderate', 'Good'] },
                  ].map((metric, idx) => {
                    const value = results.buyerConfidence[metric.key]
                    const levelIndex = metric.levels.indexOf(value)
                    const maxWidth = (levelIndex + 1) * 33.33
                    const colorClass = metric.key === 'residueRisk' 
                      ? levelIndex === 2 ? 'bg-green-500' : levelIndex === 1 ? 'bg-yellow-500' : 'bg-red-500'
                      : levelIndex >= 2 ? 'bg-green-500' : levelIndex === 1 ? 'bg-yellow-500' : 'bg-red-500'

                    return (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs font-bold text-farming-text-muted">{metric.label}</p>
                          <p className="text-sm font-bold text-farming-text">{value}</p>
                        </div>
                        <div className="w-full h-2 bg-farming-border rounded-full overflow-hidden">
                          <div
                            className={`h-full ${colorClass} transition-all duration-500`}
                            style={{ width: `${maxWidth}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </Card>

            {/* Local Language Guidance */}
            <Card variant="premium">
              <h3 className="card-title mb-4">Guidance</h3>
              
              {/* English */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-farming-text-muted mb-2">ENGLISH</p>
                  <p className="text-sm text-farming-text leading-relaxed">
                    {results.guidanceEnglish}
                  </p>
                </div>

                {/* Telugu */}
                {results.guidanceTelugu && (
                  <div className="pt-4 border-t border-farming-border-light">
                    <p className="text-xs font-bold text-farming-text-muted mb-2">తెలుగు (TELUGU)</p>
                    <p className="text-sm text-farming-text leading-relaxed font-serif">
                      {results.guidanceTelugu}
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                onClick={onNewAssessment}
                variant="primary"
                size="lg"
                fullWidth
                icon={RotateCcw}
              >
                New Assessment
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                icon={Download}
              >
                Download Report
              </Button>
            </div>

            {/* Info Box */}
            <div className="bg-glass-light border border-farming-border-light rounded-xl p-4">
              <p className="text-xs text-farming-text-muted leading-relaxed">
                ✓ Results are valid for 30 days<br/>
                ✓ Results based on provided data<br/>
                ✓ For certified guidance, consult local authorities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}