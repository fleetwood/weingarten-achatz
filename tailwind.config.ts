/* eslint-disable @typescript-eslint/no-require-imports */
import { textShadowPlugin } from './src/lib/tw/text-shadow';
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {      
      colors: {
        licorice: 'hsl(var(--licorice))',
        wenge: 'hsl(var(--wenge))',
        silver: 'hsl(var(--silver))',
        platinum: 'hsl(var(--platinum))',
        'indian-red': 'hsl(var(--indian-red))',
        'turkey-red': 'hsl(var(--turkey-red))',
        'golden-brown': 'hsl(var(--golden-brown))',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        alt: {
          DEFAULT: 'hsl(var(--alt))',
          foreground: 'hsl(var(--alt-foreground))',
        },
        'alt-foreground': 'hsl(var(--alt-foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'accent-foreground': 'hsl(var(--accent-foreground))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'popover-foreground': 'hsl(var(--popover-foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'card-foreground': 'hsl(var(--card-foreground))',
        link: {
          DEFAULT: 'var(--link)',
          hover: 'var(--link-hover)',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    textShadowPlugin
  ],
};
export default config;
