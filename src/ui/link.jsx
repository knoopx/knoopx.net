import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { inject } from "mobx-react"

const Link = ({ baseColor, className, ...props }) => {
  return (
    <a
      className={classNames(className)}
      style={{ color: baseColor[8] }}
      target="__blank"
      {...props}
    />
  )
}

Link.propTypes = {
  baseColor: PropTypes.array.isRequired,
}

export default inject("baseColor")(Link)
