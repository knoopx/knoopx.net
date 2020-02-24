import React from "react"
import Headroom from "react-headroom"

import { useTheme } from "hooks/useTheme"

import Menu from "./menu"

const Header = () => {
  const { baseColor } = useTheme()
  return (
    <Headroom>
      <header
        className="text-white ts"
        style={{ backgroundColor: baseColor[6] }}
      >
        <div className="border-b-2" style={{ borderColor: baseColor[5] }}>
          <div className="sm:flex max-w-6xl mx-auto p-4 py-0 lg:p-16 lg:p-8 lg:py-0 pv0-s">
            <div className="flex-auto flex-wrap hidden sm:flex items-baseline py-2">
              <h1 className="w-full lg:w-auto my-0 sm:mr-4 text-3xl font-bold">
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
