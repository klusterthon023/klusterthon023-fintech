import { InputHTMLAttributes, ReactNode } from "react";
import { Props } from "react-select";

export type InputStatus = "success" | "warning" | "danger";

export interface InputBaseProps {
  label?: string;
  helperText?: string;
  status?: InputStatus;
  disabled?: boolean;
  children?: ReactNode;
  inputContainerStyle?: any;
  className?: string;
  required?: boolean;
  startIcon?: ReactNode;
  isClearable?: boolean;
  variant?: "filled" | "outlined";
}
export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<InputBaseProps, "children" | "style"> {
  endIcon?: ReactNode;
}

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement>,
    Omit<InputBaseProps, "children" | "style"> {}

export interface SelectProps extends InputBaseProps, Props {}
