/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputBoxBase from "./InputBoxBase.tsx";
import { TextAreaProps } from "../input/type.ts";

const inputStyles = () => css`
  display: block;
  width: 100%;
  border-radius: 7px;
  height: 100%;
  padding: 16px;
  outline: none;
  border: none;
`;

function TextArea(props: TextAreaProps) {
  const {
    label,
    helperText,
    color = "primary",
    status,
    required,
    ...rest
  } = props;

  return (
    <InputBoxBase
      label={label}
      helperText={helperText}
      status={status}
      disabled={rest.disabled}
      required={required}
    >
      <textarea css={inputStyles()} {...rest} />
    </InputBoxBase>
  );
}

export default TextArea;
