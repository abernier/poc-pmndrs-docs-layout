import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout-1col': [
          //
          'h h',
          'm m'
        ],
        'layout-2cols': [
          //
          'h h',
          'n m'
        ],
        'layout-3cols': [
          //
          'h h h',
          'n m t'
        ]
      }
    }
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
  variants: {
    gridTemplateAreas: ['responsive']
  }
}
export default config
