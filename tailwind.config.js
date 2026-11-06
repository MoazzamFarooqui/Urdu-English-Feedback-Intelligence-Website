/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#000000',
        },
        obsidian: {
          900: '#050505',
          800: '#0D0D0D',
          700: '#161616',
          600: '#1E1E1E',
        },
        line: {
          600: '#262626',
          500: '#3A3A3A',
        },
        brand: {
          600: '#D4D4D4',
          500: '#FFFFFF',
          400: '#FFFFFF',
          300: '#E5E5E5',
          glow: 'rgba(255,255,255,0.08)',
        },
        accent: {
          500: '#A3A3A3',
          400: '#D4D4D4',
        },
        gold: {
          300: '#FFFFFF',
          500: '#3A3A3A',
        },
        text: {
          strong: '#FFFFFF',
          body: '#B3B3B3',
          muted: '#808080',
        },
        positive: '#FFFFFF',
        neutral: '#A3A3A3',
        negative: '#6B6B6B',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      },
      maxWidth: {
        shell: '1200px',
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(0,0,0,0.6)',
        glow: '0 0 30px rgba(255,255,255,0.06)',
        'glow-accent': '0 0 30px rgba(255,255,255,0.04)',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(30px,-20px) scale(1.08)' },
        },
        driftAlt: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-24px,18px) scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        driftAlt: 'driftAlt 16s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
