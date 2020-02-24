import React from "react"
import { FaHeart } from "react-icons/fa"

const Footer = () => (
  <footer className="px-4 py-8 lg:px-16 lg:px-32 bg-gray-8 text-center text-gray-1">
    <p className="block mb-2 text-sm font-semibold">
      © {new Date(Date.now()).getFullYear()} Víctor Martínez García. All rights
      reserved.
    </p>
    <p>
      <small className="block text-sm">
        Made with <FaHeart className="inline text-red-6" /> in Barcelona,
        Spain.
      </small>
    </p>
  </footer>
)

export default Footer
