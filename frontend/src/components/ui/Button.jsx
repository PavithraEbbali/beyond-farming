export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  ...props
}) {
  const baseClasses = 'font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-gradient-to-r from-farming-green to-farming-green-dark text-farming-darker hover:shadow-glow-lg hover:scale-105 active:scale-95',
    secondary: 'border-2 border-farming-green text-farming-green hover:bg-farming-green hover:text-farming-darker bg-transparent',
    tertiary: 'text-farming-green hover:bg-farming-accent hover:text-farming-green-light',
    outline: 'border border-farming-border text-farming-text hover:border-farming-green hover:text-farming-green',
    ghost: 'text-farming-text hover:text-farming-green',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin"></div>
          <span>Processing...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
        </>
      )}
    </button>
  )
}
