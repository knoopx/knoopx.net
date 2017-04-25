import React from 'react'
import OpenColor from 'open-color'
import { findDOMNode } from 'react-dom'
import sortBy from 'lodash/sortBy'

export default class TimeLine extends React.PureComponent {
  static defaultProps = {
    color: OpenColor.gray[5],
    gutterSize: 40,
    lineWidth: 8,
    markerSize: 36,
  }

  nodes = []
  state = { activeIndex: -1 }

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    const { color, markerColor, baseColor, activeColor, children, gutterSize, lineWidth, markerSize, ...props } = this.props

    return (
      <div {...props}>
        {
          React.Children.map(children, (child, index) => (
            React.cloneElement(child, {
              ref: this.appendNode,
              index,
              activeIndex: this.state.activeIndex,
              lastIndex: children.length - 1,
              color,
              gutterSize,
              lineWidth,
              markerSize,
              activeColor,
              ...child.props,
            })
          ))
        }
      </div>
    )
  }

  appendNode = (node) => {
    this.nodes.push(findDOMNode(node))
  }

  onScroll = (e) => {
    const offsets = this.nodes.map(node => node.offsetTop)
    const activeIndex = offsets.indexOf(sortBy(offsets, offset => Math.abs(offset - window.scrollY - (window.innerHeight / 2)))[0])
    this.setState({ activeIndex })
  }
}
