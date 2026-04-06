import { useRef, RefObject } from "react";
import { useSpring, animated } from "react-spring";
import classNames from "classnames";

import useCursorPosition from "hooks/useCursorPosition";

interface PanZoomProps {
  active: boolean;
  image: string;
  className?: string;
}

const PanZoom = ({ active, image, className }: PanZoomProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { offsetX = 0, offsetY = 0 } = useCursorPosition(
    ref as RefObject<HTMLDivElement>,
  );

  const { x, y } = useSpring({
    x: ref.current ? (offsetX / ref.current.clientWidth) * 100 : 0,
    y: ref.current ? (offsetY / ref.current.clientHeight) * 100 : 0,
  });

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
      style={
        {
          backgroundClip: "padding-box",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${JSON.stringify(image)})`,
          backgroundSize: active ? "unset" : "",
          ...(active && {
            backgroundPositionX: x.interpolate((v: number) => `${v}%`),
            backgroundPositionY: y.interpolate((v: number) => `${v}%`),
          }),
        } as React.CSSProperties
      }
    />
  );
};

export default PanZoom;
