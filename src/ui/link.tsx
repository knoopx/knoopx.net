import classNames from "classnames";

import { useTheme } from "hooks/useTheme";

interface LinkProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
  target?: string;
}

const Link = ({ className, href, children, target }: LinkProps) => {
  const { baseColor } = useTheme();
  return (
    <a
      href={href}
      className={classNames(className)}
      style={{ color: baseColor[6] }}
      target={target || "__blank"}
    >
      {children}
    </a>
  );
};

export default Link;
