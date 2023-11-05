import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rowdies': ['var(--font-rowdies)', 'sans-serif'],
        'varela-round': ['var(--font-varelaRound)', 'sans-serif'],
        'comfortaa': ['var(--font-comfortaa)', 'sans-serif'],
        'nunito': ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
export default config
