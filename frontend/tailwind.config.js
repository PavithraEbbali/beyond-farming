/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farming-dark': '#0a1a0f',
        'farming-darker': '#050f0a',
        'farming-card': '#1a2a1f',
        'farming-accent': '#0d2818',
        'farming-green': '#00ff88',
        'farming-green-dark': '#00cc66',
        'farming-green-light': '#66ffcc',
        'farming-border': '#2a3a2f',
        'farming-border-light': '#3a4a3f',
        'farming-text': '#e0e6e0',
        'farming-text-muted': '#a0a8a0',
        'glass-light': 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
      backgroundColor: {
        'farming-dark': '#0a1a0f',
        'farming-darker': '#050f0a',
        'farming-card': '#1a2a1f',
        'farming-accent': '#0d2818',
        'glass-light': 'rgba(255, 255, 255, 0.05)',
      },
      borderColor: {
        'farming-border': '#2a3a2f',
        'farming-border-light': '#3a4a3f',
      },
      textColor: {
        'farming-text': '#e0e6e0',
        'farming-text-muted': '#a0a8a0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0a1a0f 0%, #0d2818 50%, #050f0a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(0, 255, 136, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 136, 0.15)',
        'glow-lg': '0 0 40px rgba(0, 255, 136, 0.2)',
        'glow-xl': '0 0 60px rgba(0, 255, 136, 0.25)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.2)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.3)',
        'card': '0 2px 16px rgba(0, 0, 0, 0.15)',
        'card-lg': '0 4px 24px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'score-load': 'score-load 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(0, 255, 136, 0.15)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(0, 255, 136, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'score-load': {
          'from': { transform: 'scale(0.8)', opacity: 0 },
          'to': { transform: 'scale(1)', opacity: 1 },
        },
        'slideUp': {
          'from': { transform: 'translateY(20px)', opacity: 0 },
          'to': { transform: 'translateY(0)', opacity: 1 },
        },
        'fadeIn': {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      spacing: {
        'section': '6rem',
        'section-sm': '3rem',
      },
    },
  },
  plugins: [],
}
