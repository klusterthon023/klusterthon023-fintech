/** @jsxImportSource @emotion/react */

import { ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { IPaletteColor, Theme, Typography, theme } from "../index";
type ChipType = "success" | "error" | "info" | "warning";

interface ChipProps {
  type: ChipType;
  labelText?: string;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  style?: React.CSSProperties;
}

const baseStyles = (theme: Theme, type: ChipType) => css`
  background-color: ${theme.palette[type][50]};
  color: ${theme.palette[type][700]};
  width: auto;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  & > .icon {
    font-size: 16px;
  }
`;

function Chip(props: ChipProps) {
  const {
    type = "success",
    labelText,
    className,
    startIcon,
    endIcon,
    style,
  } = props;

  const combinedClassName = cx(css(baseStyles(theme, type)), className);

  return (
    <div className={combinedClassName} style={style}>
      {startIcon && <span className="icon">{startIcon}</span>}
      <Typography
        variant={"body6"}
        color={theme.palette[type][700] as IPaletteColor}
      >
        {labelText}
      </Typography>
      {endIcon && <span className="icon">{endIcon}</span>}
    </div>
  );
}

export default Chip;
export type { ChipProps };
