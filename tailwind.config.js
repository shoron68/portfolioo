/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      'ibm':' "IBM Plex Mono",  monospace',
      'Ubuntu':' "Ubuntu",  sans-serif',
    }
  },
  plugins: [],
}