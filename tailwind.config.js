module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fill: (theme) => ({
      yellow: theme("colors.yellow"),
      white: theme("colors.white"),
    }),
    fontFamily: {
      body: [
        "Geogrotesque",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
      ],
      serif: [
        "Geogrotesque",
        "Sensation Regular",
        "Sensation Bold",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
      ],
      mono: [
        "Geogrotesque",
        "Sensation Regular",
        "Sensation Bold",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
      ],
    },
    extend: {
      colors: {
        yellow: "#ffc100",
      },
      inset: {
        "1/2": "50%",
      },
      translate: {
        "0": "0%",
        "100": "-100%",
        "200": "-200%",
        "300": "-300%",
        "400": "-400%",
        "500": "-500%",
      },
    },
  },
  variants: { fill: ["responsive", "hover"] },
  plugins: [],
};
