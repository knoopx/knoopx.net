import React from 'react'
import Marker from './marker'
import { Animate } from 'react-move'

export default class TimeLineEvent extends React.PureComponent {
  render() {
    const { index, activeIndex, left, right, gutterSize, lineWidth, markerSize, color, activeColor, children, ...props } = this.props

    return (
      <Animate
        data={{
          scale: this.isActive ? 1.1 : 1,
          color: this.getColor(this.props.index, this.props.activeIndex),
          lineColor: this.getLineColor(this.props.index, this.props.activeIndex),
          prevLineColor: this.getLineColor(this.props.index, this.props.activeIndex - 1),
        }}
      >

        { ({ scale, color, lineColor, prevLineColor }) => (
          <div className="relative flex">
            <div
              style={{
                width: lineWidth,
                background: this.isLast ? `linear-gradient(${color} 60%, transparent)` : `linear-gradient(${lineColor} 60%, ${prevLineColor})`,
                marginTop: markerSize - (lineWidth / 2),
                marginBottom: -(lineWidth / 2),
                marginLeft: markerSize / 2,
              }}
            />

            <Marker
              color={color}
              size={markerSize}
              borderWidth={lineWidth}
              isActive={this.isActive}
              style={{
                position: 'absolute',
                top: 0,
                left: (lineWidth / 2),
                transform: `scale(${(scale)})`,
              }}
            />
            <div style={{ flex: 1, paddingLeft: gutterSize, paddingBottom: gutterSize }}>
              <div style={{ lineHeight: `${markerSize}px` }}>{right}</div>
              {children}
            </div>
          </div>
        )}
      </Animate>
    )
  }

  get isLast() {
    return this.props.index === this.props.lastIndex
  }

  get isActive() {
    return this.props.index === this.props.activeIndex
  }

  getColor(index, activeIndex) {
    if (index === activeIndex) {
      return this.props.activeColor
    }
    return this.props.color
  }

  getLineColor(index, activeIndex) {
    if (index === activeIndex) {
      return this.props.activeColor
    }

    if (index === this.props.lastIndex) {
      return 'transparent'
    }

    return this.props.color
  }
}
