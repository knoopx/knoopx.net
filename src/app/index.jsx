import React, { useLayoutEffect } from "react"

import { Divider } from "ui/layout"
import { useTheme } from "hooks/useTheme"

import Header from "./header"
import About from "./about"
import Skills from "./skills"
import Technology from "./technology"
import Experience from "./experience"
import Talks from "./talks"
import OpenSource from "./open-source"
import Recommendations from "./recommendations"
import Contact from "./contact"
import Footer from "./footer"

const App = () => {
  const { baseColor } = useTheme()

  useLayoutEffect(() => {
    const meta = document.createElement("meta")
    meta.name = "theme-color"
    meta.content = baseColor[6]
    document.head.append(meta)
  }, [baseColor])

  return (
    <div className="overflow-hidden text-gray-7 font-sans">
      <Header />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Technology />
      <Divider />
      <Experience />
      <Divider />
      <Recommendations />
      <Divider />
      <OpenSource />
      <Divider />
      <Talks />
      <Divider />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
