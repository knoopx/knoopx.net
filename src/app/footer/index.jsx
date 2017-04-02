import React from 'react'
import FaHeart from 'react-icons/lib/fa/heart'
import Link from 'ui/link'

export default function Footer() {
  return (
    <footer className="pv4 ph3 ph5-m ph6-l tc white-80 bg-black-80">
      <p className="f6 db fw6">
        © {new Date(Date.now()).getFullYear()} Víctor Martínez García. All rights reserved.
      </p>
      {/* <p>The content of this web site is licensed under a <Link href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</Link> unless otherwise specified.</p> */}
      <p><small className="f6 db ">Made with <FaHeart className="red" /> in Barcelona, Spain.</small></p>
    </footer>
  )
}
