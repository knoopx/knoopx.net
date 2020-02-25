import { useEffect, useState } from "react"

const useCursorPosition = (ref) => {
  const [position, setPosition] = useState([0, 0])

  const onMouseOver = (e) => {
    setPosition(e)
  }

  useEffect(() => {
    ref.current.addEventListener("mousemove", onMouseOver)

    return () => {
      ref.current.removeEventListener("mousemove", onMouseOver)
    }
  }, [ref])

  return position
}

export default useCursorPosition
