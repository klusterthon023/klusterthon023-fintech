/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { InputProps } from "./type.ts";
import InputBoxBase from "./InputBoxBase.tsx";
import { Theme, theme } from "../styles";

const inputStyles = () => css`
  display: block;
  width: 100%;
  border-radius: 7px;
  height: 100%;
  padding: 0 12px;
  outline: none;
  border: none;

  ::placeholder {
    color: #ababc4;
  }
`;

const endIconContainer = (theme: Theme) => css`
  padding: 0 16px;

  .passwordIcon {
    cursor: pointer;
    color: ${theme.palette.gray[300]};
  }
`;

function Input(props: InputProps) {
  const {
    label,
    helperText,
    color = "primary",
    status,
    type = "text",
    required,
    startIcon,
    endIcon,
    ...rest
  } = props;

  const [isVisible, setIsVisible] = useState(type !== "password");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const displayType = isVisible ? "text" : "password";

  return (
    <InputBoxBase
      label={label}
      helperText={helperText}
      status={status}
      disabled={rest.disabled}
      required={required}
      inputContainerStyle={{ height: 48 }}
      startIcon={startIcon}
    >
      <input
        type={type === "password" ? displayType : type}
        css={inputStyles()}
        {...rest}
      />
      {endIcon && (
        <div css={endIconContainer(theme)} onClick={toggleVisibility}>
          {endIcon}
        </div>
      )}
      {type === "password" && (
        <div css={endIconContainer(theme)} onClick={toggleVisibility}>
          <FontAwesomeIcon
            icon={isVisible ? faEyeSlash : faEye}
            className={"passwordIcon"}
          />
        </div>
      )}
    </InputBoxBase>
  );
}

export default Input;
