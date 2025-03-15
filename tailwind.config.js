/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',   // Important for the new app router
      './components/**/*.{js,ts,jsx,tsx,mdx}', 
      // Add more if needed
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  