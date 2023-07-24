import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      green: string;
      black: string;
      orange: string;
      lightBlue: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
  }
}
const theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#6c757d",
    white: "#fff",
    green: "#10e710",
    black: "#101010",
    orange: "#f9b02d",
    lightBlue: "#4199ff",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "24px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};
export default theme;
