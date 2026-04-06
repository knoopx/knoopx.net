import { useEffect, useState, RefObject } from "react";

interface UseVisibilityOptions {
  partial?: boolean;
  scrollableEl?: Element | Window;
}

function checkVisibility(ref: HTMLElement | null, partial: boolean): boolean {
  if (!ref) {
    return false;
  }

  const { top, right, bottom, left, width, height } =
    ref.getBoundingClientRect();

  if (top + right + bottom + left === 0) {
    return false;
  }

  const topCheck = partial ? top + height : top;
  const bottomCheck = partial ? bottom - height : bottom;
  const rightCheck = partial ? right - width : right;
  const leftCheck = partial ? left + width : left;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    topCheck >= 0 &&
    leftCheck >= 0 &&
    bottomCheck <= windowHeight &&
    rightCheck <= windowWidth
  );
}

const useVisibility = (
  ref: RefObject<HTMLElement>,
  { partial = false, scrollableEl = window }: UseVisibilityOptions = {},
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScrollOrResize = () =>
      setIsVisible(checkVisibility(ref.current, partial));

    scrollableEl.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);

    setIsVisible(checkVisibility(ref.current, partial));

    return () => {
      scrollableEl.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [ref, partial, scrollableEl]);

  return isVisible;
};

export default useVisibility;
