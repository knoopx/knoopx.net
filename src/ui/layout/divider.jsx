import React from 'react'
import OpenColor from 'open-color'

export default function Divider({ borderWidth = 1, borderColor = OpenColor.gray[3] }) {
  return <hr style={{ margin: 0, border: 'none', borderTopStyle: 'solid', borderTopWidth: borderWidth, borderTopColor: borderColor }} />
}
