import { divideItems } from "@/utils/var";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],

      "h-xxl": ['5.2rem',{lineHeight:'7.8rem'}],
      "h-xl": ['4rem',{lineHeight:'6rem'}],
      "h-lg": ['3.2rem',{lineHeight:'4.8rem'}],
      "h-md": ['2.8rem',{lineHeight:'4.2rem'}],
      "h-sm": ['2.4rem',{lineHeight:'3.6rem'}],
      "h-xs": ['2rem',{lineHeight:'3rem'}],
      "h-xxs": ['1.6rem',{lineHeight:'2.4rem'}],
      "h-xxxs": ['1.4rem',{lineHeight:'2.1rem'}],
      
      "b-lg": ['2rem',{lineHeight:'3.6rem'}],
      "b-md": ['1.6rem',{lineHeight:'2.88rem'}],
      "b-sm": ['1.4rem',{lineHeight:'2.52rem'}],
      "b-xs":['1.2rem',{lineHeight:'2.16rem'}],
    },
    fontWeight: {
      regular:'400',
      semibold: '600',
      bold: '700',
    },
     // w-*
     width: ({ theme }) => ({
      ...theme('spacing'),
      ...divideItems,
      auto: 'auto',
      fit: 'fit-content',
      full: '100%',
      max: 'max-content',
      min: 'min-content',
      screen: '100vw',
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      "key": "#38D7C3",
      "navy": "#1E2034",
      'grey1': '#F8F8F8',
      'grey2': '#D4D9D9',
      'grey3': '#A2A5A5',
      'grey4':'#696C6C',
      'grey5': '#363638',
      'secondary':'#FFBD3D'
    }
  },
  plugins: [],
};
export default config;
