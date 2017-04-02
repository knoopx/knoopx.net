import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { Animate } from 'react-move'

const inStyle = {
  opacity: 1,
  y: 0,
}

const outStyle = {
  opacity: 0,
  y: 20,
}

export default class PopAnimation extends React.PureComponent {
  state = { isVisible: false }

  componentWillMount() {
    window.addEventListener('load', this.onLoad)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.onLoad)
  }

  render() {
    const { children } = this.props
    const child = React.Children.only(children)
    const { style, ...props } = child.props

    return (
      <Animate data={this.state.isVisible ? inStyle : outStyle}>
        {({ opacity, y }) => React.cloneElement(child, { style: { ...style, opacity, transform: `translateY(${y}px)` }, ...props }) }
      </Animate>
    )
  }

  onLoad = (value) => {
    this.setState({ isVisible: value })
  }
}
