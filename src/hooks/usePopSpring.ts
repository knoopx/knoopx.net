import { RefObject } from "react";
import { useSpring } from "react-spring";

import useVisibility from "./useVisibility";

interface UsePopSpringOptions {
  partial?: boolean;
  scrollableEl?: Element | Window;
}

const usePopSpring = (
  ref: RefObject<HTMLElement>,
  opts: UsePopSpringOptions = {},
) => {
  const isVisible = useVisibility(ref, opts);

  return useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? `translateY(0)` : `translateY(20px)`,
  });
};

export default usePopSpring;
