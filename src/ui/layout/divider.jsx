import React from "react"
import OpenColor from "open-color"

const Divider = ({ borderWidth = 1, borderColor = OpenColor.gray[3] }) => {
  return (
    <hr
      style={{
        margin: 0,
        border: "none",
        borderTopStyle: "solid",
        borderTopWidth: borderWidth,
        borderTopColor: borderColor,
      }}
    />
  )
}

export default Divider
