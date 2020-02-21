import React from "react"
import Headroom from "react-headroom"

import useTheme from "hooks/useTheme"

import Menu from "./menu"

const Header = () => {
  const { baseColor } = useTheme()
  return (
    <Headroom>
      <header className="white" style={{ backgroundColor: baseColor[6] }}>
        <div className="bb bw1 cf" style={{ borderColor: baseColor[5] }}>
          <div className="flex-ns center mw9 pa3 pa4-m pa5-l pv0 pv0-l pv0-m pv0-s">
            <div className="flex-auto flex-ns flex-wrap items-baseline dn pv3">
              <h1 className="w-100 w-auto-l w-auto-m mr3-ns mv0">
                Víctor Martínez
              </h1>
            </div>
            <Menu />
          </div>
        </div>
      </header>
    </Headroom>
  )
}

export default Header
