import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { inject } from 'mobx-react'

@inject('baseColor')
export default class Button extends React.PureComponent {
  static propTypes ={
    baseColor: PropTypes.array.isRequired,
  }

  render() {
    const { baseColor, className, ...props } = this.props
    return (
      <a
        className={classNames('link flex items-center justify-center ph3 pv2 white ba bw1 b br-pill', className)}
        style={{ color: baseColor[6], borderColor: baseColor[6] }} {...props}
      />
    )
  }
}
