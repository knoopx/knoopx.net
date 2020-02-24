import React, { useRef } from "react"
import { useSpring, animated } from "react-spring"
import { goToAnchor } from "react-scrollable-anchor"

import useHover from "hooks/useHover"

const MenuItem = (props) => {
  const ref = useRef()
  const isHovered = useHover(ref)
  const spring = useSpring({
    borderColor: `rgba(255,255,255,${isHovered ? 1 : 0})`,
  })
  return (
    <animated.div
      ref={ref}
      className="px-4 py-2 border-b-2 text-center font-bold"
      style={{
        cursor: "pointer",
        ...spring,
      }}
      {...props}
    />
  )
}

const Menu = () => (
  <nav className="flex items-center overflow-x-auto py-2 lg:py-0 leading-none whitespace-no-wrap">
    <MenuItem onClick={() => goToAnchor("skills")}>Skills</MenuItem>
    <MenuItem onClick={() => goToAnchor("experience")}>Experience</MenuItem>
    <MenuItem onClick={() => goToAnchor("open-source")}>Open Source</MenuItem>
    <MenuItem onClick={() => goToAnchor("talks")}>Talks</MenuItem>
    <MenuItem onClick={() => goToAnchor("contact")}>Contact</MenuItem>
  </nav>
)

export default Menu
