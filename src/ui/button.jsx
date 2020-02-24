import React from "react"
import classNames from "classnames"

import useTheme from "hooks/useTheme"

const Button = ({ className, ...props }) => {
  const { baseColor } = useTheme()

  return (
    <a
      className={classNames(
        "link flex items-center justify-center px-4 py-2 text-white border  border-2 font-bold rounded-full",
        className,
      )}
      style={{ color: baseColor[6], borderColor: baseColor[6] }}
      {...props}
    />
  )
}

export default Button
