import {
  Palette,
  PaletteKey,
  Shadow,
  Theme,
  TypographyTypes,
} from "./types.ts";

const mainPalette: Omit<Palette, "text" | "background"> = {
  gray: {
    100: "#ABABC4",
    200: "#6F6F9A",
    300: "#58587E",
    400: "#434360",
    500: "#2E2E42",
    600: "#191924",
  },
  primary: {
    100: "#96C0FF",
    200: "#6BA6FF",
    300: "#2B7FFF",
    400: "#0065FF",
    500: "#0047B3",
    600: "#003E9C",
  },
  secondary: {
    100: "#BAD7B2",
    200: "#9DC793",
    300: "#73AE64",
    400: "#569E44",
    500: "#3C6F30",
    600: "#346029",
  },
  tertiary: {
    100: "#FBDCCB",
    200: "#F59D6B",
    300: "#F27E3B",
    400: "#E95F10",
    500: "#B94B0D",
    600: "#8A380A",
  },
};

export const lightPalette: Palette = {
  primary: { ...mainPalette.primary },
  gray: { ...mainPalette.gray },
  secondary: { ...mainPalette.secondary },
  tertiary: { ...mainPalette.tertiary },
};

const lightElevation = {
  1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  3: "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
  4: "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
  5: "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
};
const typography: TypographyTypes = {
  h1: {
    fontSize: "56px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
  },
  h2: {
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
  },
  h3: {
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
  },
  h4: {
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
  },
  h5: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "28px",
  },
  h6: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "140%",
  },

  body1: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  },
  body2: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  },
  body3: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  },
  body4: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  },
  body5: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  },
  body6: {
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "145%",
  },
};

const shadow: Shadow = {
  xxsmall: "0px 1px 2px 0px rgba(0, 0, 0, 0.00)",
  xsmall:
    "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  small:
    "0px 2px 4px -2px rgba(0, 0, 0, 0.06), 0px 4px 8px -2px rgba(0, 0, 0, 0.10)",
  medium:
    "0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 12px 16px -4px rgba(0, 0, 0, 0.08)",
  large:
    "0px 8px 8px -4px rgba(0, 0, 0, 0.03), 0px 20px 24px -4px rgba(0, 0, 0, 0.08)",
  xlarge: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
  xxlarge: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
};

const combinedTheme = {
  typography,
};

export const THEME_COLORS: Record<PaletteKey, string> = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#000000",
  transparentBlack: "#191924BF",
  primary: "#2775FF",
  secondary: "#50D1B2",
  tertiary: "#EC8C56",
  red: "#E23738",
  gray: "#F0F0F4",
};

export const theme: Theme = {
  palette: lightPalette,
  elevation: lightElevation,
  shadow,
  color: THEME_COLORS,
  ...combinedTheme,
};
