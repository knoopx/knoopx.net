import React from "react"
import classNames from "classnames"

const Container = ({ size = "w-100", className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("cf pa3 pa4-m pa5-l mw9 center", size, className)}
      {...props}
    />
  )
}

export default React.forwardRef(Container)
