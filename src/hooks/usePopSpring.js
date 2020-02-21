import { useState, useEffect } from "react"
import { useSpring } from "react-spring"

const usePopSpring = () => {
  const [isVisible, setVisible] = useState(false)

  const onLoad = (value) => {
    setVisible(value)
  }

  useEffect(() => {
    window.addEventListener("load", onLoad)
    return () => {
      window.removeEventListener("load", onLoad)
    }
  }, [])

  return useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? `translateY(0)` : `translateY(20px)`,
  })
}

export default usePopSpring
