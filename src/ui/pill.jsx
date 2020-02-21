import React from "react"
import classNames from "classnames"
import OpenColor from "open-color"

const Pill = ({ className, style, ...props }) => {
  return (
    <div
      className={classNames(
        `flex items-center justify-center b br-pill f7 ph3 pv1 white`,
        className,
      )}
      style={{ backgroundColor: OpenColor.gray[6], ...style }}
      {...props}
    />
  )
}

export default Pill
