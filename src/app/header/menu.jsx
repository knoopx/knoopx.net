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
      className="b bb bw1 ph3 pv2 tc"
      style={{
        cursor: "pointer",
        ...spring,
      }}
      {...props}
    />
  )
}

const Menu = () => (
  <nav className="flex items-center overflow-x-auto mv0-l mv0-m mv2 nowrap">
    <MenuItem onClick={() => goToAnchor("skills")}>Skills</MenuItem>
    <MenuItem onClick={() => goToAnchor("experience")}>Experience</MenuItem>
    <MenuItem onClick={() => goToAnchor("open-source")}>Open Source</MenuItem>
    <MenuItem onClick={() => goToAnchor("talks")}>Talks</MenuItem>
    <MenuItem onClick={() => goToAnchor("contact")}>Contact</MenuItem>
  </nav>
)

export default Menu
