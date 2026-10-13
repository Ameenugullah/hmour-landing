/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // pulled straight from the bottle photos — amber liquid, black cap, warm paper
        ink: '#211711',
        oud: '#17100b',        // darkest sections
        parchment: '#f1ebe0',  // page ground
        champagne: '#e6d9c0',  // soft panels
        amber: {
          DEFAULT: '#9a6b2b',
          deep: '#7c531e',
          light: '#c89a52',
        },
        // premium-beauty layer — blush ground + olive/gold accents
        blush: {
          DEFAULT: '#fff0f7',
          deep: '#fbe0ea',
        },
        olive: {
          DEFAULT: '#abb24a',
          light: '#c4cb74',
          deep: '#8b9238',
        },
        gold: '#e8a84a',
        terracotta: '#de624a',
      },
      fontFamily: {
        // one family only, per the brief — weights do the talking
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        luxe: '0.32em',
        wide2: '0.18em',
      },
      maxWidth: {
        page: '82rem',
      },
    },
  },
  plugins: [],
}
