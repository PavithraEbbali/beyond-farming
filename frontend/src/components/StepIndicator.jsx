import { ChevronLeft } from 'lucide-react'

export default function StepIndicator({ current = 1, onBackClick }) {
  const steps = [
    { number: 1, title: 'Enter Details', description: 'Crop & Market Info' },
    { number: 2, title: 'Analyze', description: 'AI Processing' },
    { number: 3, title: 'Review Report', description: 'Insights & Actions' },
  ]

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-farming-darker to-farming-darker bg-opacity-95 backdrop-blur-lg border-b border-farming-border-light shadow-soft-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-farming-text-muted hover:text-farming-green transition-colors duration-200 font-medium text-sm group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </button>
          <h1 className="text-gradient font-bold text-lg">Beyond Farming</h1>
          <div className="w-32" /> {/* Spacer for alignment */}
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1 max-w-sm">
              {/* Step Circle */}
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold transition-all duration-500 transform ${
                    step.number === current
                      ? 'bg-gradient-to-r from-farming-green to-farming-green-dark text-farming-darker ring-2 ring-farming-green ring-offset-2 ring-offset-farming-darker scale-110 shadow-glow-lg'
                      : step.number < current
                      ? 'bg-farming-green-dark text-farming-darker shadow-soft'
                      : 'bg-farming-card border-2 border-farming-border text-farming-text-muted'
                  }`}
                >
                  {step.number < current ? '✓' : step.number}
                </div>
                <div className={`text-center mt-3 ${current === step.number ? 'block' : 'hidden md:block'}`}>
                  <p className={`text-xs font-bold transition-colors duration-300 ${step.number === current ? 'text-farming-green' : 'text-farming-text-muted'}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-farming-text-muted mt-0.5">{step.description}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex flex-1 items-center px-2">
                  <div
                    className={`h-1 w-full rounded-full transition-all duration-500 ${
                      step.number < current ? 'bg-gradient-to-r from-farming-green-dark to-farming-green shadow-glow' : 'bg-farming-border'
                    }`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-1 bg-farming-border rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-farming-green to-farming-green-dark transition-all duration-500 shadow-glow"
            style={{ width: `${(current - 1) * 50 + 33}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
