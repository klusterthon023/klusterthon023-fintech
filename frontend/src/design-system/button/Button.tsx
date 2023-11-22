/** @jsxImportSource @emotion/react */

import { ButtonHTMLAttributes, ReactNode } from "react";
import { PaletteKey, Theme } from "../styles/types.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { css, cx } from "@emotion/css";
import { theme } from "../index.ts";

// button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: PaletteKey;
  fullWidth?: boolean;
  variant?: "filled" | "outlined" | "text";
  size?: "small" | "normal" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

// the function to get the height of the button base on the size pass from the button component
const getButtonSize = (size?: string) => {
  let buttonSize;
  switch (!!size) {
    case size === "small":
      buttonSize = "32px";
      break;
    case size === "normal":
      buttonSize = "36px";
      break;
    case size === "large":
      buttonSize = "40px";
      break;
    default:
      buttonSize = "36px";
      break;
  }
  return buttonSize;
};

// this is the function that handle the gap between the text in the button and the icons both end or start icon
const getGapForIconWithButton = (size?: string) => {
  let buttonGap;
  switch (!!size) {
    case size === "small":
      buttonGap = "4px";
      break;
    case size === "normal":
      buttonGap = "8px";
      break;
    case size === "large":
      buttonGap = "12px";
      break;
    default:
      buttonGap = "8px";
      break;
  }
  return buttonGap;
};

// the main style for the button
const baseStyles = (fullWidth?: boolean, size?: string) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s;
  height: ${getButtonSize(size)};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: ${fullWidth ? "100%" : "auto"};
  gap: ${getGapForIconWithButton(size)};
  padding: ${size === ("small" || "normal") ? "8px 20px" : "12px 24px"};

  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }
`;

// varint style for the button which can be filled, outlined and text
const variantStyles = (theme: Theme, color: PaletteKey) => ({
  filled: css`
    background-color: ${theme.palette[color][300]};
    color: ${theme.color.white};
    border: none;
    outline: none;
    &:hover {
      background-color: ${theme.palette[color][400]};
      box-shadow: ${theme.shadow.xsmall};
    }
  `,

  outlined: css`
    background-color: transparent;
    border: 0.5px solid ${theme.palette[color][300]};
    color: ${theme.palette[color][500]};

    &:hover {
      background-color: ${theme.palette[color][100]};
      color: ${theme.palette[color][700]};
    }
  `,

  text: css`
    background-color: transparent;
    color: ${theme.palette[color][300]};
    border: none;
    outline: none;
    &:hover {
      background-color: ${theme.palette[color][100]};
      color: ${theme.palette[color][300]};
    }
  `,
});

// the react main function component that return the button reuseable component
function Button(props: ButtonProps) {
  const {
    color = "primary",
    variant = "filled",
    fullWidth,
    startIcon,
    endIcon,
    children,
    loading,
    disabled = false,
    className,
    size = "normal",
    ...rest
  } = props;

  const combinedClassName = cx(
    css([variantStyles(theme, color)[variant], baseStyles(fullWidth, size)]),
    className
  );
  return (
    <button
      className={combinedClassName}
      {...rest}
      disabled={disabled || loading}
    >
      {startIcon && <span>{startIcon}</span>}
      {loading && <FontAwesomeIcon icon={faSpinner} spin />}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
}

export default Button;
export type { ButtonProps };