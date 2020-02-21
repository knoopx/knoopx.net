import { createContext, useContext } from "react"
import OpenColor from "open-color"

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

const ThemeContext = createContext({ baseColor })

const useTheme = () => {
  return useContext(ThemeContext)
}

export { useTheme, ThemeContext }
export default useTheme
