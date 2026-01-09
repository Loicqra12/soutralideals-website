/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ivorian Premium Palette
        'primary-green': 'hsl(142, 71%, 45%)',
        'primary-blue': 'hsl(217, 91%, 60%)',
        'primary-orange': 'hsl(27, 96%, 55%)',
        'gold-premium': 'hsl(45, 100%, 51%)',
        
        // Dark Mode
        'dark-bg': 'hsl(220, 26%, 8%)',
        'dark-card': 'hsl(220, 20%, 12%)',
        'dark-border': 'hsl(220, 20%, 20%)',
        
        // Text
        'text-light': 'hsl(0, 0%, 98%)',
        'text-secondary': 'hsl(0, 0%, 70%)',
        'text-muted': 'hsl(0, 0%, 50%)',
      },
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        'heading': ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(45, 212, 191, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, hsl(142, 71%, 45%), hsl(217, 91%, 60%))',
        'gradient-cta': 'linear-gradient(90deg, hsl(27, 96%, 55%), hsl(27, 96%, 65%))',
        'gradient-card': 'linear-gradient(135deg, hsl(220, 20%, 12%), hsl(220, 20%, 16%))',
      },
    },
  },
  plugins: [],
}
