import styled from "@emotion/styled";
import ReactDropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import { DropdownProps } from "rc-dropdown/es/Dropdown";
import classNames from "classnames";

interface CDropdownProps extends DropdownProps {
  className?: string;
}
function CDropdown({ className, ...others }: CDropdownProps) {
  return (
    <ReactDropdown
      overlayClassName={classNames(
        className,
        "bg-neutral-50 shadow-modals overflow-auto"
      )}
      {...others}
    />
  );
}

export const Dropdown = styled(CDropdown)<any>`
  padding: 12px;
`;
