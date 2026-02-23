/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        impact: {
          red: '#ED2939', // Approximate impact red
          dark: '#0f0f10', // Dark footer and text
          gray: '#f5f5f5', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #a52a5d 0%, #e23e57 100%)', // The magenta-red gradient
      }
    },
  },
  plugins: [],
}
