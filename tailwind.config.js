/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          25: '#FCFAF7',
          50: '#FAF7F2',
          100: '#F5EFEB',
          200: '#EAE1D7',
          300: '#DBCFC2',
          400: '#C2B2A0',
        },
        gold: {
          100: '#F7F0DF',
          200: '#EBDCB5',
          300: '#DFC88B',
          400: '#D4AF37', // Polished Champagne Gold
          500: '#C5A059',
          600: '#B89343',
          700: '#8F6F26',
          800: '#684F17',
        },
        espresso: {
          50: '#F6F3F1',
          100: '#EAE4E0',
          200: '#D5C7C0',
          300: '#A89286',
          400: '#6B5448',
          500: '#3E271E', // Primary Luxury Cocoa Text
          600: '#2E1C15',
          700: '#23150F', // Deep Mocha Espresso
          800: '#190E0A',
          900: '#100806',
        },
        blush: {
          50: '#FDF7F6',
          100: '#F9ECEB',
          200: '#F3D5D3',
          300: '#E8B4B0', // Subtle Petal Rose
          400: '#D9918B',
        },
        sage: {
          50: '#F5F7F3',
          100: '#E7ECE2',
          200: '#CED9C6',
          300: '#A7BCA0',
          400: '#7E9675', // Muted Sage
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'widest-luxury': '0.3em',
      },
      boxShadow: {
        'luxury-sm': '0 2px 10px -2px rgba(35, 21, 15, 0.04)',
        'luxury-md': '0 10px 30px -4px rgba(35, 21, 15, 0.06)',
        'luxury-lg': '0 20px 45px -8px rgba(35, 21, 15, 0.09)',
        'luxury-xl': '0 30px 60px -12px rgba(35, 21, 15, 0.12)',
        'gold-subtle': '0 4px 20px rgba(197, 160, 89, 0.2)',
      },
    },
  },
  plugins: [],
}
