import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { inject } from 'mobx-react'

@inject('baseColor')
export default class Link extends React.PureComponent {
  static propTypes = {
    baseColor: PropTypes.array.isRequired,
  }

  render() {
    const { baseColor, className, ...props } = this.props
    return (
      <a
        className={classNames(className)}
        style={{ color: baseColor[8] }}
        target="__blank"
        {...props}
      />
    )
  }
}
