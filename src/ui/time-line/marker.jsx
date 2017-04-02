import React from 'react'
import { Animate } from 'react-move'

export default function Marker({ size, color, borderWidth, isActive, style }) {
  const [red, green, blue] = color.match(/\d+/g)

  return (
    <Animate
      data={{ opacity: isActive ? 1 : 0 }}
    >
      {({ opacity, padding }) => (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: 99999999,
            padding: borderWidth / 4,
            backgroundClip: 'content-box',
            border: `${borderWidth}px solid ${color}`,
            backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`,
            ...style,
          }}
        />
        )}
    </Animate>
  )
}
