import classNames from "classnames";
import OpenColor from "open-color";

interface PillProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Pill = ({ className, style, children }: PillProps) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center font-bold rounded-full text-xs px-4 py-1 text-white",
        className,
      )}
      style={{ backgroundColor: OpenColor.gray[6], ...style }}
    >
      {children}
    </div>
  );
};

export default Pill;
