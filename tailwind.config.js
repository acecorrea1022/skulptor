/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-semi-bold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-extra-bold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
      backgroundImage: {
        "screen-gradient":
          "linear-gradient(180deg, #00171f 0%, #004d52 55%, #4a2f4e 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(216,27,96,0.10), rgba(240,58,71,0.10))",
        "nav-gradient": "linear-gradient(135deg, #00171f, #004d52, #4a2f4e)",
      },
      boxShadow: {
        glass: "0 -6px 24px rgba(0,0,0,0.35)",
      },

      colors: {
        midnight: "#00171f",
        teal: "#004d52",
        plum: "#4a2f4e",
        magenta: "#d81b60",
        sunset: "#f03a47",
        primary: "#d81b60",   // using magenta as primary
        secondary: "#004d52", // teal
        accent: "#f03a47",    // sunset coral
        background: "#00171f",// midnight
        surface: "#4a2f4e",   // plum for card/surface
        danger: "#F75555",
      },
    },
  },
  plugins: [],
};
