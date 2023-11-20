import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#38B6FF",
          "secondary": "#93c5fd",
          "accent": "#2dd4bf",
          "neutral": "#d1d5db",
          "base-100": "#ffffff",
          "info": "#bae6fd",
          "success": "#86efac",
          "warning": "#fef08a",
          "error": "#fecaca",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
