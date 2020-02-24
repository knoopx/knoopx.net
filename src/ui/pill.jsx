import React from "react"
import classNames from "classnames"
import OpenColor from "open-color"

const Pill = ({ className, style, ...props }) => {
  return (
    <div
      className={classNames(
        `flex items-center justify-center font-bold rounded-full text-xs px-4 py-1 text-white`,
        className,
      )}
      style={{ backgroundColor: OpenColor.gray[6], ...style }}
      {...props}
    />
  );
}

export default Pill
