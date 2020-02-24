import React from "react"
import classNames from "classnames"

import { useTheme } from "hooks/useTheme"

const Link = ({ className, ...props }) => {
  const { baseColor } = useTheme()
  return (
    <a
      className={classNames(className)}
      style={{ color: baseColor[6] }}
      target="__blank"
      {...props}
    />
  )
}

export default Link
