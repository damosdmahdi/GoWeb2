// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // <-- Ini akan memindai semua file yang relevan di dalam folder src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
