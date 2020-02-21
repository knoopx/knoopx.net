import React from "react"
import { Animate } from "react-move"

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
    color,
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

    return color
  }

  return (
    <Animate
      ref={ref}
      data={{
        scale: isActive ? 1.1 : 1,
        color: index === activeIndex ? activeColor : color,
        lineColor: getLineColor(index, activeIndex),
        prevLineColor: getLineColor(index, activeIndex - 1),
      }}
    >
      {({ scale, color, lineColor, prevLineColor }) => (
        <div className="relative flex">
          <div
            style={{
              width: lineWidth,
              background: isLast
                ? `linear-gradient(${color} 60%, transparent)`
                : `linear-gradient(${lineColor} 60%, ${prevLineColor})`,
              marginTop: markerSize - lineWidth / 2,
              marginBottom: -(lineWidth / 2),
              marginLeft: markerSize / 2,
            }}
          />

          <Marker
            color={color}
            size={markerSize}
            borderWidth={lineWidth}
            isActive={isActive}
            style={{
              position: "absolute",
              top: 0,
              left: lineWidth / 2,
              transform: `scale(${scale})`,
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
      )}
    </Animate>
  )
}

export default React.forwardRef(TimeLineEvent)
