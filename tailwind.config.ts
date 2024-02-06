import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xl: "80%",
      },
    },
    extend: {
      colors: {
        app: {
          DEFAULT: "#24242446",
          foreground: "var(--text-primary)",
          hovered: "var(--hovered)",
          "hovered-2": "var(--hovered-2)",
          sidebar: {
            DEFAULT: "var(--sidebar-bg)",
            foreground: "var(--text-primary)",
          },
          window: "var(--window-glass)",
          primary: {
            DEFAULT: "var(--primary)",
            foreground: "var(--text-primary)",
          },

          text: {
            DEFAULT: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            tertiary: "var(--text-tertiary)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
