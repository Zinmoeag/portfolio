/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    // require("@tailwindcss/ui"),
  ],
  theme: {
    extend: {
      colors: {
        skin:{
          main: 'rgb(var(--main) / <alpha-value>)',
          third: 'rgb(var(--third) / <alpha-value>)',
          secondary: 'rgb(var(--secondary) / <alpha-value>)',
          fourth: 'rgb(var(--fourth) / <alpha-value>)',
          firth: 'rgb(var(--firth) / <alpha-value>)',
          transparent: 'var(--transparent)',
        },
      },
    },
  },
}


