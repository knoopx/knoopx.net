import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { inject } from "mobx-react"

const Button = ({ baseColor, className, ...props }) => {
  return (
    <a
      className={classNames(
        "link flex items-center justify-center ph3 pv2 white ba bw1 b br-pill",
        className,
      )}
      style={{ color: baseColor[6], borderColor: baseColor[6] }}
      {...props}
    />
  )
}

Button.propTypes = {
  baseColor: PropTypes.array.isRequired,
}

export default inject("baseColor")(Button)
