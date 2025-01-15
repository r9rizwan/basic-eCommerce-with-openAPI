/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#0569E3",
        warning: "#FFC403",
        danger: "#E32005",
        foreground: "#111827",
        "muted-foreground": "#4B5563",
        border: "#D1D5DB",
        background: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
