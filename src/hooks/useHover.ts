import { useEffect, useState, RefObject } from "react";

const useHover = (ref: RefObject<HTMLElement>): boolean => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    currentRef.addEventListener("mouseenter", handleMouseEnter);
    currentRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      currentRef.removeEventListener("mouseenter", handleMouseEnter);
      currentRef.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return isHovered;
};

export default useHover;
