import React from "react"
import classNames from "classnames"

import useTheme from "hooks/useTheme"

const Button = ({ className, ...props }) => {
  const { baseColor } = useTheme()

  return (
    <a
      className={classNames(
        "link flex items-center justify-center ph3 pv2 white ba bw1 b br-pill",
        className,
      )}
      style={{ color: baseColor[6], borderColor: baseColor[6] }}
      {...props}
    />
  )
}

export default Button
