export default function ScoreRing({ score, size = 'lg', animated = true }) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
    xl: 'w-48 h-48',
  }

  const radius = size === 'sm' ? 36 : size === 'md' ? 52 : size === 'lg' ? 72 : 88
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (score / 100) * circumference

  const getColor = (score) => {
    if (score >= 75) return '#00ff88'
    if (score >= 50) return '#fbbf24'
    return '#ef4444'
  }

  return (
    <div className={`${sizeClasses[size]} flex-center relative ${animated ? 'animate-score-load' : ''}`}>
      {/* Background circle */}
      <svg className="absolute inset-0 transform -rotate-90" style={{ width: '100%', height: '100%' }}>
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="#2a3a2f"
          strokeWidth={size === 'sm' ? '2' : size === 'md' ? '3' : size === 'lg' ? '4' : '5'}
        />
        {/* Animated progress circle */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke={getColor(score)}
          strokeWidth={size === 'sm' ? '2' : size === 'md' ? '3' : size === 'lg' ? '4' : '5'}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: animated ? 'stroke-dashoffset 2s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
            filter: `drop-shadow(0 0 10px ${getColor(score)}20)`,
          }}
        />
      </svg>

      {/* Score text */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl md:text-5xl font-black text-farming-green">{score}</div>
        <div className="text-xs md:text-sm text-farming-text-muted font-medium">/100</div>
      </div>
    </div>
  )
}
