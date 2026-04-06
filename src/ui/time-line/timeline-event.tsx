import { forwardRef, HTMLAttributes } from "react";
import { useSpring, animated } from "react-spring";

import Marker from "./marker";

interface TimeLineEventProps extends HTMLAttributes<HTMLDivElement> {
  index?: number;
  activeIndex?: number;
  lastIndex?: number;
  right?: React.ReactNode;
  gutterSize?: number;
  lineWidth?: number;
  markerSize?: number;
  color?: string;
  activeColor?: string;
  children?: React.ReactNode;
}

const TimeLineEvent = forwardRef<HTMLDivElement, TimeLineEventProps>(
  (
    {
      index = 0,
      activeIndex = -1,
      lastIndex = 0,
      right,
      gutterSize = 40,
      lineWidth = 8,
      markerSize = 36,
      color: baseColor = "#888888",
      activeColor = "#000000",
      children,
      ...props
    },
    ref,
  ) => {
    const isLast = index === lastIndex;
    const isActive = index === activeIndex;

    const getLineColor = (idx: number, actIdx: number) => {
      if (idx === actIdx) {
        return activeColor;
      }

      if (idx === lastIndex) {
        return "transparent";
      }

      return baseColor;
    };

    const color = index === activeIndex ? activeColor : baseColor;
    const lineColor = getLineColor(index, activeIndex);
    const prevLineColor = getLineColor(index, activeIndex - 1);

    const spring = useSpring({
      background: isLast
        ? `linear-gradient(${color} 60%, transparent)`
        : `linear-gradient(${lineColor} 60%, ${prevLineColor})`,
    });

    const markerSpring = useSpring({
      transform: `scale(${isActive ? 1.1 : 1})`,
    });

    return (
      <div ref={ref} className="relative flex" {...props}>
        <animated.div
          style={
            {
              width: lineWidth,
              marginTop: markerSize - lineWidth / 2,
              marginBottom: -(lineWidth / 2),
              marginLeft: markerSize / 2,
              ...spring,
            } as unknown as React.CSSProperties
          }
        />

        <Marker
          color={index === activeIndex ? activeColor : baseColor}
          size={markerSize}
          borderWidth={lineWidth}
          isActive={isActive}
          style={
            {
              position: "absolute",
              top: 0,
              left: lineWidth / 2,
              ...markerSpring,
            } as unknown as React.CSSProperties
          }
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
    );
  },
);

export default TimeLineEvent;
