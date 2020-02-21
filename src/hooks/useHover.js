import { useEffect, useState } from "react"

const useHover = (ref) => {
  const [isHovered, setHovered] = useState(false)
  const onMouseOver = () => {
    setHovered(true)
  }

  const onMouseOut = () => {
    setHovered(false)
  }

  useEffect(() => {
    ref.current.addEventListener("mouseover", onMouseOver)
    ref.current.addEventListener("mouseout", onMouseOut)

    return () => {
      ref.current.removeEventListener("mouseover", onMouseOver)
      ref.current.removeEventListener("mouseout", onMouseOut)
    }
  }, [ref])

  return isHovered
}

export default useHover
