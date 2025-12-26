const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Outfit", ...fontFamily.sans],
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        "custom-dark": "#111111",     // Deep charcoal/black
        "custom-light": "#FBFBFB",    // Off-white
        "custom-gray": "#444444",     // Elegant gray for accent
        "custom-border": "#E5E5E5",   // Light border
        "custom-border-dark": "#333333", // Dark border
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            "h1,h2,h3,h4": {
              "font-family": theme("fontFamily.serif"),
              "font-weight": "400", // Elegant, not too bold
              color: theme("colors.gray.900"),
            },
            a: {
              color: theme("colors.gray.900"),
              "text-decoration": "underline",
              "text-decoration-color": theme("colors.gray.300"),
              "text-underline-offset": "4px",
              "&:hover": {
                "text-decoration-color": theme("colors.gray.600"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            "h1,h2,h3,h4": {
              color: theme("colors.gray.100"),
            },
            a: {
              color: theme("colors.gray.100"),
              "text-decoration-color": theme("colors.gray.700"),
              "&:hover": {
                "text-decoration-color": theme("colors.gray.400"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
