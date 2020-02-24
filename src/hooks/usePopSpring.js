import { useSpring } from "react-spring"

import useVisibility from "./useVisibility"

const usePopSpring = (ref) => {
  const isVisible = useVisibility(ref)

  return useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? `translateY(0)` : `translateY(20px)`,
  })
}

export default usePopSpring
