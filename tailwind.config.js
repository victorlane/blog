/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "oklch(97.39% 0.015 222.68 / 1)",
          100: "oklch(94.76% 0.031 222.05 / 1)",
          200: "oklch(89.52% 0.061 224.19 / 1)",
          300: "oklch(84.83% 0.089 224.94 / 1)",
          400: "oklch(80.21% 0.113 227.02 / 1)",
          500: "oklch(75.74% 0.135 230.29 / 1)",
          600: "oklch(69.62% 0.145 234.44 / 1)",
          700: "oklch(56.53% 0.116 233.66 / 1)",
          800: "oklch(42.29% 0.084 232.46 / 1)",
          900: "oklch(27.08% 0.05 228.53 / 1)",
          950: "oklch(18.26% 0.033 225.07 / 1)",
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        'pastel-green': {
          '50': '#f0fdf4',
          '100': '#dbfde7',
          '200': '#baf8cf',
          '300': '#6dee9a',
          '400': '#48e07d',
          '500': '#1fc85b',
          '600': '#14a547',
          '700': '#13823c',
          '800': '#156633',
          '900': '#13542c',
          '950': '#042f15',
        },
      },
      animation: {
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};