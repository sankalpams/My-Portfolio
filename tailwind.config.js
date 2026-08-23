/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-primary)',
        foreground: 'var(--text-primary)',
        card: {
          DEFAULT: 'var(--bg-card)',
          foreground: 'var(--text-primary)',
          border: 'var(--border-card)',
        },
        surface: {
          DEFAULT: 'var(--bg-surface)',
          secondary: 'var(--bg-secondary)',
        },
        border: 'var(--border)',
        muted: {
          DEFAULT: 'var(--bg-secondary)',
          foreground: 'var(--text-muted)',
        },
        dark: {
          bg: '#000000',
          surface: '#08080a',
          card: '#0d0d11',
          border: '#1a1a24',
          muted: '#8e8e9f',
        },
        accent: {
          pink: '#f43f5e',
          rose: '#fda4af',
          cyan: '#38bdf8',
          teal: '#14b8a6',
          violet: '#a855f7',
        }
      },
      boxShadow: {
        '3d-card': '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 16px 36px -8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        '3d-hover': '0 2px 4px rgba(0, 0, 0, 0.04), 0 14px 32px -4px rgba(0, 0, 0, 0.12), 0 28px 56px -10px rgba(0, 0, 0, 0.09), 0 0 0 1px rgba(244, 63, 94, 0.25)',
        '3d-pill': '0 2px 6px -1px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        '3d-nav': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        '3d-button': '0 4px 14px 0 rgba(244, 63, 94, 0.35), 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        '3d-dark-card': '0 1px 2px rgba(0, 0, 0, 0.6), 0 8px 24px -4px rgba(0, 0, 0, 0.8), 0 20px 40px -10px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        '3d-dark-hover': '0 2px 4px rgba(0, 0, 0, 0.6), 0 14px 36px -4px rgba(0, 0, 0, 0.9), 0 28px 60px -10px rgba(0, 0, 0, 0.95), 0 0 20px -2px rgba(244, 63, 94, 0.2), 0 0 0 1px rgba(244, 63, 94, 0.4)',
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
        mono: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'pulse-glow': 'pulseGlow 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
