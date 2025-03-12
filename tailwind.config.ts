import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["Share Tech Mono", "monospace"],
        pixel: ["Press Start 2P", "cursive"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))",
          },
          "50%": {
            textShadow: "0 0 20px hsl(var(--secondary)), 0 0 30px hsl(var(--secondary))",
          },
        },
        "pixel-shift": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(1px)" },
          "50%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(-1px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scanline": "scanline 10s linear infinite",
        "glow": "glow 2s ease-in-out infinite",
        "pixel-shift": "pixel-shift 0.2s steps(2) infinite",
        "float": "float 3s ease-in-out infinite",
      },
      boxShadow: {
        'neon': '0 0 5px hsl(var(--primary)), 0 0 20px hsl(var(--primary))',
        'neon-hover': '0 0 10px hsl(var(--primary)), 0 0 30px hsl(var(--primary))',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-glow': {
          textShadow: '0 0 10px hsl(var(--primary))',
        },
        '.text-glow-lg': {
          textShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))',
        },
        '.retro-border': {
          border: '2px solid hsl(var(--border))',
          boxShadow: '4px 4px 0 hsl(var(--border))',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
} satisfies Config;

export default config;
