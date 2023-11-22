/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Theme } from "../styles/types.ts";
import { InputBaseProps, InputStatus } from "../input/type.ts";
import { theme } from "../index.ts";

const inputRootStyle = (disabled?: boolean) => css`
  ${disabled && css({ opacity: 0.4 })}
`;

const dangerBorderColor = (theme: Theme) => css`
  border-color: ${theme.palette.error[500]};
`;

const inputContainerCss = (theme: Theme, status?: InputStatus) => {
  return css`
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${theme.palette.gray[300]};
    background: #fff;
    transition: border-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    ${status === "danger" && dangerBorderColor(theme)};
    font-size: 14px;
    color: ${theme.palette.gray[300]};

    &:focus-within {
      border-color: ${theme.palette.primary[300]};
      ${status === "danger" && dangerBorderColor(theme)};
    }
  `;
};

const labelTextStyle = (theme: Theme) => css`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 8px;
  display: inline-block;
  color: ${theme.palette.gray[500]};
`;
const helperTextStyles = (theme: Theme) => css`
  margin-top: 4px;
  color: ${theme.color.red};
  font-size: 12px;
`;

const labelTextAndRequiredStyle = () => css`
  display: flex;
  align-item: center;
`;

const requiredStyle = (theme: Theme) => css`
  color: ${theme.palette.error[500]};
  margin-top: -3px;
`;

const iconStyle = (theme: Theme) => css`
  color: ${theme.palette.neutral[500]};
  font-size: 16px;
  padding-left: 12px;
`;

function InputBoxBase(props: InputBaseProps) {
  const {
    label,
    helperText,
    status,
    children,
    disabled,
    inputContainerStyle,
    required,
    startIcon,
  } = props;

  return (
    <div css={inputRootStyle(disabled)}>
      <div css={labelTextAndRequiredStyle()}>
        {label && <label css={labelTextStyle(theme)}>{label}</label>}
        {required && <p css={requiredStyle(theme)}>*</p>}
      </div>
      <div css={inputContainerCss(theme, status)} style={inputContainerStyle}>
        {startIcon && <span css={iconStyle(theme)}>{startIcon}</span>}{" "}
        {children}
      </div>
      {helperText && <div css={helperTextStyles(theme)}>{helperText}</div>}
    </div>
  );
}

export default InputBoxBase;
