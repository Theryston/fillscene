import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;
      neutralColor: string;
      gradient: {
        deg: number;
        orientations: {
          beginning: {
            color: string;
            percent: string;
          };
          middle: {
            color: string;
            percent: string;
          };
          end: {
            color: string;
            percent: string;
          };
        };
      };
    };
    font: {
      family: string;
      titles: {
        h1: {
          fontSize: string;
          fontHeight: string;
          fontWeight: number;
        };
        h2: {
          fontSize: string;
          fontHeight: string;
          fontWeight: number;
        };
        h3: {
          fontSize: string;
          fontHeight: string;
          fontWeight: number;
        };
        h4: {
          fontSize: string;
          fontHeight: string;
          fontWeight: number;
        };
        h5: {
          fontSize: string;
          fontHeight: string;
          fontWeight: number;
        };
        h6: {
          fontSize: string;
          fontHeight: string;
          fontWeight: number;
        };
      };
      paragraph: {
        big: {
          fontSize: string;
          fontHeight: string;
        };
        medium: {
          fontSize: string;
          fontHeight: string;
        };
        small: {
          fontSize: string;
          fontHeight: string;
        };
      };
    };
  }
}
