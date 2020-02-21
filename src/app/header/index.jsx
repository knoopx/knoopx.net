import React from 'react'
import Headroom from 'react-headroom'
import { inject } from 'mobx-react'

import Menu from './menu'

const Header = (props) => (
  <Headroom>
    <header className="white" style={{ backgroundColor: props.baseColor[6] }}>
      <div className="bb bw1 cf" style={{ borderColor: props.baseColor[5] }}>
        <div className="pa3 pa4-m pa5-l mw9 center pv0 pv0-l pv0-m pv0-s flex-ns">
          <div className="flex-ns flex-wrap items-baseline pv3 flex-auto dn">
            <h1 className="mr3-ns w-100 w-auto-l w-auto-m mv0">Víctor Martínez</h1>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  </Headroom>
)

export default inject('baseColor')(Header)
