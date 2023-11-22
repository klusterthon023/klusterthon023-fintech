type ColorSet = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
};

export type PaletteKey =
  | "primary"
  | "secondary"
  | "tertiary"
  | "black"
  | "white"
  | "transparent"
  | "transparentBlack"
  | "red";

export type IPaletteColor =
  | "primary.100"
  | "primary.200"
  | "primary.300"
  | "primary.400"
  | "primary.500"
  | "primary.600"
  | "secondary.100"
  | "secondary.200"
  | "secondary.300"
  | "secondary.400"
  | "secondary.500"
  | "secondary.600"
  | "tertiary.50"
  | "tertiary.100"
  | "tertiary.200"
  | "tertiary.300"
  | "tertiary.400"
  | "tertiary.500"
  | "tertiary.600"
  | "gray.100"
  | "gray.200"
  | "gray.300"
  | "gray.400"
  | "gray.500"
  | "gray.600";

export type Palette = {
  [key: string]: ColorSet | any;
  primary: ColorSet;
  secondary: ColorSet;
  gray: ColorSet;
  tertiary: ColorSet;
};

export type TypographyStyleSet = {
  fontSize: string;
  fontStyle: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing?: string;
  textTransform?: any;
};

export type TypographyTypes = {
  h1: TypographyStyleSet;
  h2: TypographyStyleSet;
  h3: TypographyStyleSet;
  h4: TypographyStyleSet;
  h5: TypographyStyleSet;
  h6: TypographyStyleSet;
  body1: TypographyStyleSet;
  body2: TypographyStyleSet;
  body3: TypographyStyleSet;
  body4: TypographyStyleSet;
  body5: TypographyStyleSet;
  body6: TypographyStyleSet;
};

export type Shadow = {
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
};

export type Theme = {
  palette: Palette;
  elevation: Record<number, string>;
  shadow: Shadow;
  typography: TypographyTypes;
  color: Record<PaletteKey, string>;
};
