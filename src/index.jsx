import React from "react"
import ReactDOM from "react-dom"
import OpenColor from "open-color"
import { Provider } from "mobx-react"

import App from "./app"

const colors = [
  "red",
  "pink",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "lime",
  "orange",
]
const colorIndex = Math.floor(Math.random() * (colors.length - 1))
const baseColor = OpenColor[colors[colorIndex]]

ReactDOM.render(
  <Provider baseColor={baseColor}>
    <App />
  </Provider>,
  document.querySelector("#root"),
)
