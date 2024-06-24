/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularLight: ' repeating-radial-gradient(rgba(0,0,0,0.4), #0891B2,#000 5px 10%)',
      },

      keyframes: {
        slidein: {
          '0%': { transform: 'translateX(150vw) scaleX(2)' },
          '100%': { transform: 'translateX(0) scaleX(1)' },
        },
      },
      animation: {
        slidein: 'slidein 2s forwards',
      },

      boxShadow: {
        'custom': '0 0 20px rgb(4,127,178)',
      },


    },

  },
  daisyui: {
    themes: ["light", "valentine", "black"],
  },
  plugins: [require('daisyui'),
  function ({ addUtilities }) {
    addUtilities({
      '.no-scrollbar': {
        '-webkit-overflow-scrolling': 'touch',
        'scrollbar-width': 'none',
        '-ms-overflow-style': 'none',
      }
    }, ['responsive']);
  }
  ],
};
