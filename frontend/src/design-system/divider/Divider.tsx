import { css, cx } from "@emotion/css";
import { theme } from "../index";

// Divider props
interface DividerProps {
  className?: string;
}

const baseStyles = () => css`
  height: 0.5px;
  width: 100%;
  background: ${theme.palette.gray[100]};
`;

function Divider(props: DividerProps) {
  const { className } = props;

  const combinedClassName = cx(css(baseStyles()), className);
  return <div className={combinedClassName} />;
}

export default Divider;
export type { DividerProps };
