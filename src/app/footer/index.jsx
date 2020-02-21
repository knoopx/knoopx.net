import React from "react"
import { FaHeart } from "react-icons/fa"

const Footer = () => (
  <footer className="bg-black-80 ph3 ph5-m ph6-l pv4 tc white-80">
    <p className="db f6 fw6">
      © {new Date(Date.now()).getFullYear()} Víctor Martínez García. All rights
      reserved.
    </p>
    <p>
      <small className="db f6">
        Made with <FaHeart className="red" /> in Barcelona, Spain.
      </small>
    </p>
  </footer>
)

export default Footer
