import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      basic: {
        lightColor: string;
        darkColor: string;
      };
      neutral: {
        lightColor: string;
        mediumLightColor: string;
        mediumColor: string;
        darkColor: string;
      };
      primary: {
        primaryColor: string;
        accentColor: string;
        secondaryColor: string;
        selectionColor: string;
      };
      shadow: {
        basicShadow: string;
      };
    };
    typography: {
      mainFont: string;
    };
  }
}
