import classNames from "classnames";

import "./styles.css";

interface SpinnerProps {
  size?: number;
  className?: string;
}

const Spinner = ({ size = 48, className }: SpinnerProps) => (
  <div className="spinner" style={{ width: size, height: size }}>
    <div className={classNames(["bar", "first", className])} />
    <div className={classNames(["bar", "second", className])} />
    <div className={classNames(["bar", "third", className])} />
  </div>
);

export default Spinner;
