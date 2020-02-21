import React from "react"
import Color from "color"
import { useSpring, animated } from "react-spring"

const Marker = ({ size, color, borderWidth, isActive, style }) => {
  const [red, green, blue] = Color(color)
    .rgb()
    .array()

  const spring = useSpring({
    border: `${borderWidth}px solid ${color}`,
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${isActive ? 1 : 0})`,
  })

  return (
    <animated.div
      style={{
        width: size,
        height: size,
        borderRadius: 99999999,
        padding: borderWidth / 4,
        backgroundClip: "content-box",
        ...spring,
        ...style,
      }}
    />
  )
}

export default Marker
