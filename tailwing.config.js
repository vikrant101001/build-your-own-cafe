/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#fef6e4',
        darkBrown: '#4b2e2e',
        coffee: '#a47148',
      },
    },
  },
  plugins: [],
}
