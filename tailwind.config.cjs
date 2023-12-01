/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#2386C9',
        accent: '#322B2B',
        secondary: '#30A69B',
        tertiary: '#0D4880',
        dark: '#080A0E'
      },
      borderImageSource: {
        gradient: 'linear-gradient(266.77deg, #323232 0.43%, #1B1B1B 24.06%, #606060 45.28%, #000000 68.27%, #424242 100%)',
      }
    },
    fontFamily: {
      gilroy: ['Gilroy'],
      graphik: ['Graphik']
    }
  }
};

module.exports = config;
