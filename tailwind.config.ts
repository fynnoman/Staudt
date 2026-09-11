import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#26282a",
          900: "#2c2e31",
          850: "#33353a",
          800: "#3a3d42",
          700: "#464a51",
          600: "#565b64",
          500: "#6b7079"
        },
        signal: {
          DEFAULT: "#68B041",
          soft: "#8CC968",
          deep: "#4F8B2E"
        },
        rust: "#b23a1c",
        chrome: "#d7dbe0"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.045em"
      },
      boxShadow: {
        glass: "0 1px 0 rgba(255,255,255,0.06) inset, 0 12px 40px -12px rgba(0,0,0,0.55)",
        signal: "0 12px 32px -8px rgba(104,176,65,0.35)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(1200px 600px at 50% -10%, rgba(104,176,65,0.18), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
