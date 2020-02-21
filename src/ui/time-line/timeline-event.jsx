import React from "react"
import { useSpring, animated } from "react-spring"

import Marker from "./marker"

const TimeLineEvent = (
  {
    index,
    activeIndex,
    lastIndex,
    left,
    right,
    gutterSize,
    lineWidth,
    markerSize,
    color: baseColor,
    activeColor,
    children,
    ...props
  },
  ref,
) => {
  const isLast = index === lastIndex
  const isActive = index === activeIndex

  const getLineColor = (index, activeIndex) => {
    if (index === activeIndex) {
      return activeColor
    }

    if (index === lastIndex) {
      return "transparent"
    }

    return baseColor
  }

  const color = index === activeIndex ? activeColor : baseColor
  const lineColor = getLineColor(index, activeIndex)
  const prevLineColor = getLineColor(index, activeIndex - 1)

  const spring = useSpring({
    background: isLast
      ? `linear-gradient(${color} 60%, transparent)`
      : `linear-gradient(${lineColor} 60%, ${prevLineColor})`,
  })

  const markerSpring = useSpring({
    transform: `scale(${isActive ? 1.1 : 1})`,
  })

  return (
    <div ref={ref} className="relative flex">
      <animated.div
        style={{
          width: lineWidth,
          marginTop: markerSize - lineWidth / 2,
          marginBottom: -(lineWidth / 2),
          marginLeft: markerSize / 2,
          ...spring,
        }}
      />

      <Marker
        color={index === activeIndex ? activeColor : baseColor}
        size={markerSize}
        borderWidth={lineWidth}
        isActive={isActive}
        style={{
          position: "absolute",
          top: 0,
          left: lineWidth / 2,
          ...markerSpring,
        }}
      />

      <div
        style={{
          flex: 1,
          paddingLeft: gutterSize,
          paddingBottom: gutterSize,
        }}
      >
        <div style={{ lineHeight: `${markerSize}px` }}>{right}</div>
        {children}
      </div>
    </div>
  )
}

export default React.forwardRef(TimeLineEvent)
