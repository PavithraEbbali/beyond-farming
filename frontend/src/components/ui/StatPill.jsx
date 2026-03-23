export default function StatPill({ icon: Icon, label, value, color = 'green' }) {
  const colorClasses = {
    green: 'from-green-900 to-green-800 border-green-700',
    yellow: 'from-yellow-900 to-yellow-800 border-yellow-700',
    red: 'from-red-900 to-red-800 border-red-700',
    blue: 'from-blue-900 to-blue-800 border-blue-700',
  }

  return (
    <div className={`bg-gradient-to-r ${colorClasses[color]} border rounded-xl p-4 flex items-center gap-3 shadow-soft hover:shadow-card-lg transition-all duration-300`}>
      {Icon && <Icon className={`w-5 h-5 flex-shrink-0 ${color === 'green' ? 'text-green-300' : color === 'yellow' ? 'text-yellow-300' : color === 'red' ? 'text-red-300' : 'text-blue-300'}`} />}
      <div>
        <p className="text-xs text-farming-text-muted opacity-80">{label}</p>
        <p className="text-lg font-bold text-farming-text">{value}</p>
      </div>
    </div>
  )
}
