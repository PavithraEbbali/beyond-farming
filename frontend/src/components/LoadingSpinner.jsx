export default function LoadingSpinner({ message = 'Analyzing...', fullPage = false }) {
  const containerClass = fullPage
    ? 'min-h-screen bg-farming-darker flex items-center justify-center'
    : 'flex flex-col items-center justify-center gap-4 py-16'

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Animated loader */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-farming-border opacity-30"></div>

          {/* Spinning rings */}
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '2s' }}>
            <circle cx="50%" cy="50%" r="50%" fill="none" stroke="#00ff88" strokeWidth="2" opacity="0.6" />
          </svg>

          {/* Inner rotating element */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-farming-green border-r-farming-green" style={{ animation: 'spin 1.5s linear infinite' }}></div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-farming-green rounded-full shadow-glow"></div>
          </div>
        </div>

        {/* Messages */}
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-farming-text">{message}</p>
          <p className="text-sm text-farming-text-muted">
            Analyzing crop data, market compliance rules, and traceability requirements...
          </p>
        </div>

        {/* Progress indicators */}
        <div className="flex items-center gap-2 mt-6">
          <div className="w-1 h-1 bg-farming-green rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-farming-green rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-1 bg-farming-green rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
