import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    basic: {
      lightColor: "#FFFFFF",
      darkColor: "#222222",
    },
    neutral: {
      lightColor: "#F7F7F7",
      mediumLightColor: "#DDDDDD",
      mediumColor: "#C2C2C2",
      darkColor: "#717171",
    },
    primary: {
      primaryColor: "#E2485D",
      accentColor: "#DE2B56",
      secondaryColor: "#C72D65",
      selectionColor: "#006C6F",
    },
  },

  typography: {
    mainFont: "'Inter Variable', sans-serif",
  },
};

export { mainTheme };
