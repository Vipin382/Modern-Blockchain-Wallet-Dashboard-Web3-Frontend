import { createTheme, NextUIProvider } from "@nextui-org/react";

const LightTheme = createTheme({
  type: "light", // light / dark
  className: "", // optional
  theme: {
    colors: {
      // generic colors
      white: "#ffffff",
      black: "#000000",

      // background colors (light)
      background: "$white",
      primaryLight: "#D0DBFF",
      backgroundAlpha: "#f5f5f5",
      foreground: "$white",

      Primary100: "#D3E0FD",
      primaryForeground: "$white",
      Primary300: "#7C9DF7",
      Primary400: "#5A7FF0",
      primary: "#2752E7",
      success: "#53D258",
    },

    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
});

const DarkTheme = createTheme({
  type: "dark", // light / dark
  className: "", // optional
  theme: {
    colors: {
      background: "#000000",
      backgroundAlpha: "rgba(0,0,0,0)",
      foreground: "#111111",
      primaryLight: "#D0DBFF",
      primary: "#2752E7",
      success: "#53D258",
    },

    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
});

export { LightTheme, DarkTheme };
