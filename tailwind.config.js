/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      /* =========================
         SPACING SYSTEM (8pt grid)
      ========================= */
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
      },

      /* =========================
         BORDER RADIUS SYSTEM
      ========================= */
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
        pill: "999px",
      },

      /* =========================
         SHADOW SYSTEM
      ========================= */
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        elevated: "0 10px 30px rgba(0,0,0,0.12)",
        glow: "0 0 0 3px rgba(99,102,241,0.25)",
      },

      /* =========================
         COLOR TOKENS (SEMANTIC)
      ========================= */
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--card)",
        muted: "var(--muted)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",

        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        info: "#3b82f6",

        border: "var(--border)",
        ring: "var(--ring)",
      },

      /* =========================
         TYPOGRAPHY SCALE
      ========================= */
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
        "4xl": ["36px", "40px"],
      },

      /* =========================
         ANIMATIONS UX (micro-interactions)
      ========================= */
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
        softPulse: "softPulse 2s infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(4px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        softPulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
    },
  },

  plugins: [],
};