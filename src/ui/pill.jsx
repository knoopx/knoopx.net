import React from 'react'
import OpenColor from 'open-color'
export default class Pill extends React.PureComponent {
  render() {
    const { className, style, ...props } = this.props
    return (
      <div className={`flex items-center justify-center ph3 pv1 white f7 b br-pill ${className}`} style={{ backgroundColor: OpenColor.gray[6], ...style }} {...props} />
    )
  }
}
