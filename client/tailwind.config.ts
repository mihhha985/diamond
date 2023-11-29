import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '998px',
      'xl': '1280px',
    },
    extend: {
      zIndex:{
        "1-": "-1",
      },
      colors: {
        "primary": "#fce6fa",
        "secondary": {
          50: "#fce8fb",
          100: "#ddc7d1",
          200: "#655166",
          300: "#3d2e3e",
        }
      },
      backgroundImage:{
        "gradient": "linear-gradient(to bottom, #465163 5%, #fce6fa 95%)",
      },
      fontFamily: {
        "header": ["Cormorant SC", "serif"],
        "link": ['PT Sans Narrow', 'sans-serif']
      },
    }
  },
  plugins: [],
}
export default config
