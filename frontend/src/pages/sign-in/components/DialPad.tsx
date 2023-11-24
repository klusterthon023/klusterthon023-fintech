import OtpInput from "react-otp-input";
import { theme } from "../../../design-system";

interface IDialPadProps {
  value: string;
  onChange: any;
  onBlur: (e: any) => void;
}

function DialPad({ value, onChange, onBlur }: IDialPadProps) {
  const inputStyle = {
    height: 64,
    width: 64,
    marginRight: 20,
    backgroundColor: theme.color.gray,
    borderRadius: "16px",
    color: theme.palette.gray[300],
    fontSize: "28px",
    border:
      value.length > 0
        ? `1px solid ${theme.palette.primary[300]}`
        : `1px solid ${theme.color.gray}`,
    fontweight: 600,
  };

  return (
    <OtpInput
      value={value}
      onChange={(otp) => {
        onChange("token")(otp);
      }}
      numInputs={6}
      shouldAutoFocus={true}
      inputStyle={inputStyle}
      containerStyle={{ justifyContent: "center" }}
      renderInput={(props) => (
        <>
          <input
            {...props}
            onBlur={onBlur}
            name={"token"}
            className={`outline-primary-300`}
          />
        </>
      )}
    />
  );
}

export default DialPad;
