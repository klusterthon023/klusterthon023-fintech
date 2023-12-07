/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputBoxBase from "./InputBoxBase.tsx";
import ReactSelect from "react-select";
import { SelectProps } from "../input/type.ts";
import classNames from "classnames";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Typography, theme, Theme } from "../index.ts";

const selectCss = (theme: Theme) => css`
  display: block;
  width: 100%;
  border-radius: 3px;
  height: 100%;
  padding: 0 16px;
  outline: none;

  .css-cp01gg-control {
    margin-top: 4px;
  }

  .select__placeholder {
    font-size: 15px;
    color: ${theme.palette.gray[500]};
    font-weight: 300;
  }

  .select__menu {
    left: 0;
    box-shadow: ${theme.shadow.medium};
    background-color: ${theme.color.white};
    border: 1px solid ${theme.palette.gray[100]};
    border-radius: 8px;
    margin-top: 4px;
    padding: 4px;
  }

  .select__option {
    display: flex;
    padding: 10px 14px;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    cursor: pointer;
    max-height: 40px;
    color: ${theme.palette.gray[600]};
    ${css(theme.typography.body4)};
    transition: background-color 0.5s ease;
    font-weight: 500;
  }

  .option-content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .option-label {
    flex-grow: 1;
  }

  .marker_icon {
    color: ${theme.palette.primary[600]};
    font-size: 20px;
  }

  .select__option--selected {
    background-color: ${theme.color.gray};
    color: ${theme.palette.gray[300]};
  }

  .select__option:hover {
    background-color: ${theme.color.gray};
    color: ${theme.palette.gray[300]};
  }

  .select__singleValue {
    ${css(theme.typography.body4)};
    color: ${theme.palette.gray[400]};
    font-weight: 500;
  }

  .cancel__icon {
    color: ${theme.palette.gray[300]};
    cursor: pointer;
  }
`;

function Select(props: SelectProps) {
  const { label, helperText, status, disabled, isClearable, ...rest } = props;

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const customStyles = {
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: theme.palette.gray[500],
      transform: isSelectOpen ? "rotate(180deg)" : null,
    }),
    option: (provided: any, _: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: theme.palette.gray[600],
    }),
    optionLabel: (provided: any, _: any) => ({
      ...provided,
      marginRight: "8px",
    }),
    optionContent: (provided: any, _: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }),
    clearIndicator: (provided: any) => ({
      ...provided,
      color: theme.palette.gray[500],
      cursor: "pointer",
    }),
  };

  const CustomOption = ({ innerProps, label, isSelected }: any) => (
    <div
      {...innerProps}
      className={
        isSelected
          ? "select__option select__option--selected"
          : "select__option"
      }
    >
      <div className="option-content">
        <Typography
          variant="body4"
          color={isSelected ? "gray.400" : "gray.600"}
          className="option-label !truncate !line-clamp-1 !mr-2"
        >
          {label}
        </Typography>
        {isSelected && (
          <FontAwesomeIcon icon={faCheck} className="marker_icon" />
        )}
      </div>
    </div>
  );
  return (
    <InputBoxBase
      label={label}
      helperText={helperText}
      status={status}
      disabled={disabled}
      inputContainerStyle={{ height: 48 }}
    >
      <ReactSelect
        {...rest}
        unstyled
        styles={customStyles}
        onMenuOpen={() => setIsSelectOpen(true)}
        onMenuClose={() => setIsSelectOpen(false)}
        components={{
          Option: CustomOption,
        }}
        css={selectCss(theme)}
        classNames={{
          placeholder: () => "select__placeholder",
          menu: () => "select__menu",

          option: (state) =>
            classNames("select__option", {
              ["select__option--selected"]: state.isFocused || state.isSelected,
            }),
          singleValue: () => "select__singleValue",
        }}
        isDisabled={disabled}
        isClearable={true}
      />
    </InputBoxBase>
  );
}

export default Select;
