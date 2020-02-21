import React, { useState, useEffect } from "react"
import OpenColor from "open-color"
import { findDOMNode } from "react-dom"
import sortBy from "lodash/sortBy"

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

  const onScroll = (e) => {
    const offsets = nodes.map((node) => node.offsetTop)
    const index = offsets.indexOf(
      sortBy(offsets, (offset) =>
        Math.abs(offset - window.scrollY - window.innerHeight / 2),
      )[0],
    )
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
