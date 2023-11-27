const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        // fontSize: {
        //   tiny: '0.75rem', // text-tiny
        //   small: '1rem', // text-small
        //   medium: '1.125rem', // text-medium
        //   large: '1.25', // text-large
        // },
        // radius: {
        //   small: '6px', // rounded-small
        //   medium: '10px', // rounded-medium
        //   large: '12px', // rounded-large
        // },
      },
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
};
