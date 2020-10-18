module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/%]+/g) || [],
    },
  },
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
      boxShadow: {
        menu: "inset 0px 71px 38px -30px rgba(0,0,0, 0.7)",
        gallery: "10px 10px #ffc100",
      },
      colors: {
        yellow: "#ffc100",
        black: "#111",
        orange: "#955d21",
        lightGrey: "#333",
      },
      inset: {
        "1/2": "50%",
        "-6": "-1.5rem",
        "-10": "-2.5rem",
        r6: "1.6rem",
      },
      translate: {
        0: "0%",
        100: "-100%",
        200: "-200%",
        300: "-300%",
        400: "-400%",
        500: "-500%",
        600: "-600%",
        700: "-700%",
        800: "-800%",
        900: "-900%",
        1000: "-1000%",
      },
    },
  },
  variants: {
    fill: ["responsive", "hover"],
  },
  plugins: [],
};
