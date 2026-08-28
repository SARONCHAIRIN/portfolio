/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        ink: {
          950: 'var(--bg)',
          900: 'var(--bg-subtle)',
          850: 'var(--bg-card)',
          800: 'var(--bg-elevated)',
          750: 'var(--bg-elevated)',
          700: 'var(--bg-elevated)',
          600: 'var(--bg-elevated)',
          500: 'var(--bg-elevated)',
        },
        flutter: {
          50: '#eaf6ff',
          100: '#d0ecff',
          200: '#a6d9ff',
          300: '#6fc0ff',
          400: '#3aa6ff',
          500: '#1389ff',
          600: '#0a6fd6',
          700: '#0a5aae',
          800: '#0b4a8e',
          900: '#0c3d76',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Khmer', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        khmer: ['Noto Sans Khmer', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        glow: 'var(--accent-glow)',
        card: 'var(--shadow-card)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
