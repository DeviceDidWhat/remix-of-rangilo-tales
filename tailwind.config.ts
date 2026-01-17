import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        display: ["Yatra One", "cursive"],
        body: ["Poppins", "sans-serif"],
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
        // Palace-inspired palette
        mustard: {
          DEFAULT: "hsl(var(--mustard))",
          foreground: "hsl(var(--accent-foreground))",
        },
        peacock: {
          DEFAULT: "hsl(var(--peacock))",
          foreground: "hsl(var(--peacock-foreground))",
        },
        terracotta: {
          DEFAULT: "hsl(var(--terracotta))",
          foreground: "hsl(var(--terracotta-foreground))",
        },
        maroon: {
          DEFAULT: "hsl(var(--maroon))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ivory: {
          DEFAULT: "hsl(var(--ivory))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
        },
        "pink-city": {
          DEFAULT: "hsl(var(--pink-city))",
        },
        "dusty-rose": {
          DEFAULT: "hsl(var(--dusty-rose))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
        },
        coral: {
          DEFAULT: "hsl(var(--coral))",
        },
        indigo: {
          DEFAULT: "hsl(var(--indigo))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "wave": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "gentle-sway": {
          "0%, 100%": { transform: "rotate(-1deg) translateX(-2px)" },
          "50%": { transform: "rotate(1deg) translateX(2px)" },
        },
        "illuminate": {
          "0%, 100%": { boxShadow: "0 0 15px hsl(42 85% 55% / 0.2)" },
          "50%": { boxShadow: "0 0 30px hsl(42 85% 55% / 0.4)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "wave": "wave 2.5s ease-in-out infinite",
        "gentle-sway": "gentle-sway 4s ease-in-out infinite",
        "illuminate": "illuminate 2s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-palace': 'var(--gradient-palace)',
        'gradient-sunset': 'var(--gradient-sunset)',
        'gradient-mustard': 'var(--gradient-mustard)',
        'gradient-maroon': 'var(--gradient-maroon)',
        'gradient-fresco': 'var(--gradient-fresco)',
        'gradient-pink-city': 'var(--gradient-pink-city)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'card': 'var(--shadow-card)',
        'lifted': 'var(--shadow-lifted)',
        'carved': 'var(--shadow-carved)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;