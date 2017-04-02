import React from 'react'
import ReactDOM from 'react-dom'
import OpenColor from 'open-color'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'

import App from './app'

const colors = ['red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange']
const colorIndex = Math.floor((Math.random() * (colors.length - 1)))
const baseColor = OpenColor[colors[colorIndex]]
// const baseColor = OpenColor.teal

function render() {
  ReactDOM.render(
    <AppContainer>
      <Provider baseColor={baseColor}>
        <App />
      </Provider>
    </AppContainer>
    , document.querySelector('#root'),
  )
}

if (module.hot) { module.hot.accept('./app', render) }

render()
