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
        background: '#090d16',
        surface: {
          DEFAULT: '#0f172a',
          hover: '#1e293b',
          glass: 'rgba(15, 23, 42, 0.75)',
        },
        primary: {
          DEFAULT: '#38bdf8', // Neon cyan / sky blue
          glow: 'rgba(56, 189, 248, 0.25)',
          hover: '#0ea5e9',
        },
        accent: {
          DEFAULT: '#818cf8', // Indigo / violet accent for futuristic AI vibe
          glow: 'rgba(129, 140, 248, 0.25)',
        },
        border: 'rgba(148, 163, 184, 0.12)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

