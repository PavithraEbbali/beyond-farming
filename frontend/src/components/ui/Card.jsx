export default function Card({ children, variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'card',
    premium: 'card-premium',
    glass: 'card-glass',
    stat: 'card-stat',
  }

  return (
    <div className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}
