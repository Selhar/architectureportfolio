module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    },
  },
  variants: {},
  plugins: [],
};
