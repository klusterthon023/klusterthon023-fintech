// Helper functions to determine styles based on props
import { Theme } from "../styles";

export const getCheckboxBackgroundColor = (
  theme: Theme,
  checked: boolean,
  disabled?: boolean
) => {
  if (disabled) return theme.palette.gray["100"];
  if (checked) return theme.color.transparent;
  return "transparent";
};

export const getCheckboxHoverBackgroundColor = (
  theme: Theme,
  disabled?: boolean
) => {
  if (disabled) return theme.palette.gray["100"];
  return theme.color.transparent;
};

export const getCheckboxBorderColor = (
  theme: Theme,
  checked: boolean,
  disabled?: boolean
) => {
  if (disabled) return theme.palette.gray["200"];
  if (checked) return theme.palette.primary["500"];
  return theme.palette.gray["300"];
};
