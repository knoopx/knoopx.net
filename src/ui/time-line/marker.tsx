import Color from "color";
import { useSpring, animated } from "react-spring";

interface MarkerProps {
  size: number;
  color: string;
  borderWidth: number;
  isActive: boolean;
  style?: React.CSSProperties;
}

const Marker = ({ size, color, borderWidth, isActive, style }: MarkerProps) => {
  const [red, green, blue] = Color(color).rgb().array();

  const spring = useSpring({
    border: `${borderWidth}px solid ${color}`,
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${isActive ? 1 : 0})`,
  });

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
  );
};

export default Marker;
