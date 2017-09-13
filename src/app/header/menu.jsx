import React from 'react'
import { Animate } from 'react-move'
import { goToAnchor } from 'react-scrollable-anchor'

class MenuItem extends React.PureComponent {
  state = { isHovered: false }

  render() {
    const { ...props } = this.props
    return (
      <Animate data={{ opacity: this.state.isHovered ? 1 : 0 }}>{
        ({ opacity }) => (
          <div
            onMouseOver={() => this.setState({ isHovered: true })}
            onMouseOut={() => this.setState({ isHovered: false })}
            className="tc pv2 ph3 b bb bw1"
            style={{ cursor: 'pointer', borderColor: `rgba(255,255,255,${opacity})` }}
            {...props}
          />
        )}
      </Animate>
    )
  }
}

export default class Menu extends React.PureComponent {
  render() {
    return (
      <nav className="flex items-center mv2 mv0-l mv0-m nowrap overflow-x-auto">
        <MenuItem onClick={() => goToAnchor('skills')}>Skills</MenuItem>
        <MenuItem onClick={() => goToAnchor('experience')}>Experience</MenuItem>
        <MenuItem onClick={() => goToAnchor('open-source')}>Open Source</MenuItem>
        <MenuItem onClick={() => goToAnchor('talks')}>Talks</MenuItem>
        <MenuItem onClick={() => goToAnchor('contact')}>Contact</MenuItem>
      </nav>
    )
  }
}
