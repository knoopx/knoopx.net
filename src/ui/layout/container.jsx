import React from "react"
import classNames from "classnames"

const Container = ({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("p-4 lg:p-8 lg:p-16 container mx-auto", className)}
      {...props}
    />
  )
}

export default React.forwardRef(Container)
