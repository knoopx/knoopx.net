import React from 'react'
import classNames from 'classnames'

export default class Container extends React.PureComponent {
  static defaultProps = {
    size: 'w-100',
  }

  render() {
    const { className, ...props } = this.props
    return (
      <div className={classNames('cf pa3 pa4-m pa5-l mw9 center', this.props.size, className)} {...props} />
    )
  }
}
