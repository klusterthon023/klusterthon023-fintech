/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import {
  IPaletteColor,
  PaletteKey,
  theme,
  Theme,
  THEME_COLORS,
} from "..//styles";
import IntrinsicElements = React.JSX.IntrinsicElements;

type TypographyVariants = keyof typeof theme.typography;

const defaultComponentMapping: Record<TypographyVariants, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  body3: "span",
  body4: "span",
  body5: "span",
  body6: "span",
};

type IFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type TypographyProps = {
  variant?: TypographyVariants;
  children?: ReactNode;
  color?: PaletteKey | IPaletteColor;
  fontWeight?: IFontWeight;
  className?: string;
};

type Props<P> = TypographyProps &
  P & {
    component?: React.ElementType<P> | React.ComponentType<P>;
  };

function isThemeColor(color: PaletteKey): color is PaletteKey {
  return !!THEME_COLORS[color];
}

function resolveColorFromPalette(
  theme: Theme,
  colorString: IPaletteColor | PaletteKey
): string | undefined {
  if (isThemeColor(colorString as PaletteKey))
    return theme.color[colorString as PaletteKey];
  const [colorKey, shade] = colorString?.split(".") || [];
  return theme.palette[colorKey]?.[shade];
}

function createTypographyComponent<P>(
  theme: Theme,
  variant: TypographyVariants,
  color: IPaletteColor | PaletteKey,
  asComponent?: React.ElementType<P> | React.ComponentType<P>,
  fontWeight?: IFontWeight
) {
  const Component = asComponent || defaultComponentMapping[variant] || "span";
  const resolvedColor = resolveColorFromPalette(theme, color);

  return styled(Component as keyof IntrinsicElements)<TypographyProps>({
    ...theme.typography[variant],
    color: resolvedColor,
    fontWeight: fontWeight || theme.typography[variant]?.fontWeight,
    margin: 0,
  });
}

function Typography<P>(props: Props<P>) {
  const {
    variant = "body2",
    color = "black",
    component,
    children,
    fontWeight,
    ...others
  } = props;

  const StyledComponent = createTypographyComponent(
    theme,
    variant,
    color,
    component,
    fontWeight
  );
  return <StyledComponent {...others}>{children}</StyledComponent>;
}

export default Typography;
