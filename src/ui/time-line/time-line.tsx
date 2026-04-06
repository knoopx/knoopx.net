import React, { useState, useEffect, Component } from "react";
import OpenColor from "open-color";
import { findDOMNode } from "react-dom";

const distanceFrom = (offset: number) =>
  Math.abs(offset - window.scrollY - window.innerHeight / 2);

interface TimeLineProps {
  color?: string;
  gutterSize?: number;
  lineWidth?: number;
  markerSize?: number;
  activeColor?: string;
  children: React.ReactNode;
  className?: string;
}

const TimeLine = ({
  color = OpenColor.gray[5],
  gutterSize = 40,
  lineWidth = 8,
  markerSize = 36,
  activeColor,
  children,
  className,
}: TimeLineProps) => {
  const nodes: HTMLElement[] = [];
  const [activeIndex, setActiveIndex] = useState(-1);

  const onScroll = () => {
    const offsets = nodes.map((node) => node.offsetTop);
    const sorted = offsets
      .concat()
      .sort((a, b) => distanceFrom(a) - distanceFrom(b));
    const index = offsets.indexOf(sorted[0]);
    setActiveIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appendRef = (ref: Component | null) => {
    const node = findDOMNode(ref) as HTMLElement | null;
    if (node) {
      nodes.push(node);
    }
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ref: appendRef,
            index,
            activeIndex,
            lastIndex: React.Children.count(children) - 1,
            color,
            gutterSize,
            lineWidth,
            markerSize,
            activeColor,
            ...child.props,
          });
        }
        return child;
      })}
    </div>
  );
};

export default TimeLine;
