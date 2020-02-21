import React, { useState, useEffect } from "react"
import OpenColor from "open-color"
import { findDOMNode } from "react-dom"

const distanceFrom = (offset) =>
  Math.abs(offset - window.scrollY - window.innerHeight / 2)

const TimeLine = ({
  color = OpenColor.gray[5],
  gutterSize = 40,
  lineWidth = 8,
  markerSize = 36,
  markerColor,
  baseColor,
  activeColor,
  children,
  ...props
}) => {
  const nodes = []
  const [activeIndex, setActiveIndex] = useState(-1)

  const onScroll = () => {
    const offsets = nodes.map((node) => node.offsetTop)
    const sorted = offsets
      .concat()
      .sort((a, b) => distanceFrom(a) - distanceFrom(b))
    const index = offsets.indexOf(sorted[0])
    setActiveIndex(index)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const appendRef = (ref) => {
    const node = findDOMNode(ref)
    if (node) {
      nodes.push(node)
    }
  }

  return (
    <div {...props}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: appendRef,
          index,
          activeIndex,
          lastIndex: children.length - 1,
          color,
          gutterSize,
          lineWidth,
          markerSize,
          activeColor,
          ...child.props,
        }),
      )}
    </div>
  )
}

export default TimeLine
