import { useRef } from "react";
import { useSpring, animated } from "react-spring";

import useHover from "hooks/useHover";

const goToAnchor = (anchor: string, offset = 0) => {
  try {
    const node = document.querySelector(anchor) as HTMLElement;
    if (node) {
      window.scroll({
        top: node.offsetTop - offset,
        behavior: "smooth",
      });
    }
  } catch {
    // ignore
  }
};

interface MenuItemProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MenuItem = ({ onClick, children }: MenuItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useHover(ref);
  const spring = useSpring({
    borderColor: `rgba(255,255,255,${isHovered ? 1 : 0})`,
  });
  return (
    <animated.div
      ref={ref}
      className="px-4 py-2 border-b-2 text-center font-bold"
      style={{
        cursor: "pointer",
        ...spring,
      }}
      onClick={onClick}
    >
      {children}
    </animated.div>
  );
};

const Menu = () => (
  <nav className="flex items-center overflow-x-auto py-2 lg:py-0 leading-none whitespace-no-wrap">
    <MenuItem onClick={() => goToAnchor("#skills")}>Skills</MenuItem>
    <MenuItem onClick={() => goToAnchor("#experience")}>Experience</MenuItem>
    <MenuItem onClick={() => goToAnchor("#open-source")}>Open Source</MenuItem>
    <MenuItem onClick={() => goToAnchor("#talks")}>Talks</MenuItem>
    <MenuItem onClick={() => goToAnchor("#contact")}>Contact</MenuItem>
  </nav>
);

export default Menu;
