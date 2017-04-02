import React from 'react'
import { StaggeredTransition } from 'react-move'

export default class Stagger extends React.PureComponent {
  static defaultProps = {
    isActive: false,
    children: [],
  }

  render() {
    const { isActive, inState, outState, nextState, getStyle, children, style, ...props } = this.props

    return (
      <StaggeredMotion partialVisibility defaultStyles={this.defaultStyles} styles={this.getStyle}>
        {styles =>
          <div style={{ overflow: 'hidden', ...style }} {...props}>
            {styles.map((springs, i) => {
              const child = React.Children.toArray(children)[i]
              const { style, ...childProps } = child.props
              return React.cloneElement(child, { key: i, ...childProps, style: { ...style, ...getStyle(springs) } })
            })}
          </div>
        }
      </StaggeredMotion>
    )
  }

  get defaultStyles() {
    return React.Children.map(this.props.children, child => this.style)
  }

  get style() {
    return this.props.isActive ? this.props.inState : this.props.outState
  }

  getStyle = styles =>
    styles.map((style, i) => {
      if (i === 0) {
        return this.style
      }

      return this.props.nextState(styles[i - 1])
    })
}
