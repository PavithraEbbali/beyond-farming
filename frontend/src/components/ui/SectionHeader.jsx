export default function SectionHeader({ title, subtitle, accent = true, className = '' }) {
  return (
    <div className={`text-center space-y-2 mb-12 ${className}`}>
      <h2 className={`section-title ${accent ? 'text-gradient' : ''}`}>{title}</h2>
      {subtitle && <p className="section-subtitle max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
