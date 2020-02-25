import React, { useRef } from "react"
import { useSpring, animated } from "react-spring"
import classNames from "classnames"

import useCursorPosition from "hooks/useCursorPosition"

const PanZoom = ({ active, image, className }) => {
  const ref = useRef()
  const { offsetX = 0, offsetY = 0 } = useCursorPosition(ref)

  const { x, y } = useSpring({
    x: ref.current ? (offsetX / ref.current.clientWidth) * 100 : 0,
    y: ref.current ? (offsetY / ref.current.clientHeight) * 100 : 0,
  })

  return (
    <animated.div
      ref={ref}
      className={classNames(
        "absolute h-full w-full rounded bg-center",
        className,
        {
          "border border-gray-4": active,
        },
      )}
      style={{
        backgroundClip: "padding-box",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${JSON.stringify(image)})`,
        backgroundSize: active ? "unset" : "",
        ...(active && {
          backgroundPositionX: x.interpolate((v) => `${v}%`),
          backgroundPositionY: y.interpolate((v) => `${v}%`),
        }),
      }}
    />
  )
}

export default PanZoom
