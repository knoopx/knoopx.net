import { useEffect, useState, RefObject } from "react";

interface MousePosition {
  offsetX: number;
  offsetY: number;
}

const useCursorPosition = (ref: RefObject<HTMLElement>): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({
    offsetX: 0,
    offsetY: 0,
  });

  const onMouseOver = (e: MouseEvent) => {
    setPosition({
      offsetX: e.offsetX,
      offsetY: e.offsetY,
    });
  };

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    currentRef.addEventListener("mousemove", onMouseOver);

    return () => {
      currentRef.removeEventListener("mousemove", onMouseOver);
    };
  }, [ref]);

  return position;
};

export default useCursorPosition;
