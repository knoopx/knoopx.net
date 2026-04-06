import classNames from "classnames";

import { useTheme } from "hooks/useTheme";

interface ButtonProps {
  className?: string;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const Button = ({ className, href, target, children }: ButtonProps) => {
  const { baseColor } = useTheme();

  return (
    <a
      href={href}
      target={target}
      className={classNames(
        "link flex items-center justify-center px-4 py-2 text-white border border-2 font-bold rounded-full",
        className,
      )}
      style={{ color: baseColor[6], borderColor: baseColor[6] }}
    >
      {children}
    </a>
  );
};

export default Button;
