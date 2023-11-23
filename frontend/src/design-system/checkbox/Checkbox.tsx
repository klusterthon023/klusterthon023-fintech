/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, ReactNode, useState } from "react";
import { Typography } from "../typography";
import {
  getCheckboxBackgroundColor,
  getCheckboxBorderColor,
  getCheckboxHoverBackgroundColor,
} from "../utils/checkbox.ts";
import { theme } from "../index.ts";

const HiddenCheckbox = styled.input`
  display: none;
`;

const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: ${(props) =>
    getCheckboxBackgroundColor(theme, props.checked, props.disabled)};
  border: 1px solid
    ${(props) => getCheckboxBorderColor(theme, props.checked, props.disabled)};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) =>
      getCheckboxHoverBackgroundColor(theme, props.disabled)};
  }
`;

const CheckboxIcon = styled(FontAwesomeIcon)<{ visible: boolean }>`
  color: ${theme.palette.primary["400"]};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`;

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: ReactNode;
  secondaryLabel?: string;
}
export default function Checkbox(props: CheckboxProps) {
  const { className, checked, onChange, disabled, label, ...others } = props;

  const [internalChecked, setInternalChecked] = useState<boolean>(!!checked);

  const handleCheckboxToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setInternalChecked(e.target.checked);
    if (onChange) {
      onChange?.(e);
    }
  };

  const isChecked = checked !== undefined ? checked : internalChecked;
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox
        type={"checkbox"}
        checked={isChecked}
        {...others}
        theme={theme}
        onChange={handleCheckboxToggle}
        disabled={disabled}
      />
      <StyledCheckbox checked={isChecked} disabled={!!disabled}>
        <CheckboxIcon fontSize={12} icon={faCheck} visible={isChecked} />
      </StyledCheckbox>
      <Typography
        variant={"body4"}
        fontWeight={500}
        color={disabled ? "gray.100" : "gray.300"}
      >
        {label}
      </Typography>
    </CheckboxContainer>
  );
}

export type { CheckboxProps };
