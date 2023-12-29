/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      'Midnight-Green': "#002529",
      'Light-Coral': "#F67E7E",
      'White': "#E1E1E1",
      'Rapture-Blue': "#79C8C7",
      'Police-Blue': "#2C6269",
      'Deep-Jungle-Green': "#004047",
      'Sacramento-State-Green': "#012F34",
      'Dark-Green': "#002529",
    },
    screens: {
      'sm': { 'min': '320px', 'max': '480px' },
      // => @media (min-width: 320px and max-width: 480px) { ... }

      'md': { 'min': '481px', 'max': '768px' },
      // => @media (min-width: 481px and max-width: 768px) { ... }

      'lg': { 'min': '769px', 'max': '1024px' },
      // => @media (min-width: 769px and max-width: 1024px) { ... }

      'xl': { 'min': '1025px', 'max': '1200px' },
      // => @media (min-width: 1025px and max-width: 1200px) { ... }

      '2xl': { 'max': '1400px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}