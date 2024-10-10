/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/assets/bgv.svg')",
      }
    },
  },
  plugins: [],
}