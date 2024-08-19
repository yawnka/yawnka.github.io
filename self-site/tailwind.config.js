/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        gold: {
          400: '#d4af37',
          500: '#c5a017',
          600: '#b2890e',
          700: '#9e7c07',
        },
        'custom-nav-bar': '#afd9ab',
        'custom-cream': '#f5e8c9',
        'custom-light-cream': '#faf4e6',
        'custom-dark-green': '#166307'
      }),
      fontFamily: {
        judson: ['Judson-Regular', 'serif'],
        judson_bold: ['Judson-Bold', 'serif'],
        playfair: ['Playfair-Regular', 'serif'],
        playfair_bold: ['Playfair-Bold', 'serif'],
        silkscreen: ['Silkscreen-Regular', 'serif'],
        silkscreen_bold: ['Silkscreen-Bold', 'serif'],
        anticSlab: ['AnticSlab-Regular', 'serif']
      },
    },
  },
  plugins: [],
};