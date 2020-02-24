import React, { useState } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import classNames from "classnames"
import FlipMove from "react-flip-move"

import useTheme from "hooks/useTheme"
import Pill from "ui/pill"
import { Container } from "ui/layout"

const technologies = {
  "Front-end": [
    "React",
    "Angular.js",
    "LESS",
    "SASS",
    "vue.js",
    "MobX",
    "Redux",
    "Tachyons",
    "TailwindCSS",
    "Bootstrap",
    "Foundation",
    "ES6",
    "TypeScript",
    "JavaScript",
    "D3",
    "SVG",
    "HTML5",
    "CSS3",
    "PostCSS",
    "Babel",
    "Webpack",
  ],
  "Back-end": [
    "Ruby",
    "Ruby On Rails",
    "Sinatra",
    "Node.js",
    "Express.js",
    "RSpec",
    "MySQL",
    "SQLite",
    "PostgreSQL",
    "Redis",
    "Memcache",
    "MongoDB",
    "Firebase",
    "RethinkDB",
    "REST",
    "GraphQL",
  ],
  "Other": [
    "Git",
    "GitHub",
    "Linux",
    "Windows",
    "MacOSX",
    "Docker",
    "Capistrano",
    "Ansible",
    "Electron",
    "React Native",
    "Heroku",
    "Digital Ocean",
    "AWS",
    "Puppet",
    "Computer Vision",
    "Graphite",
    "Arduino",
    "Raspberry PI",
  ],
}

const categories = Object.keys(technologies)

const Technology = () => {
  const { baseColor } = useTheme()
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const children = technologies[activeCategory]
  return (
    <ScrollableAnchor id="technology">
      <Container className="py-12">
        <header className="mb-8 text-center">
          <h1 className="mb-1 mb-2 text-5xl text-gray-9 font-bold leading-none">
            Skills
          </h1>
          <h2 className="mt-1 text-2xl text-gray-6 font-medium leading-none">
            and technologies
          </h2>
        </header>

        <nav className="flex justify-center mb-4">
          {categories.map((key, i) => {
            const isActive = key === activeCategory
            return (
              <div
                key={key}
                onClick={() => {
                  setActiveCategory(key)
                }}
                className={classNames(
                  "font-bold inline-block px-4 py-2 border text-center cursor-pointer truncate",
                  {
                    "border-r-0": i !== categories.length - 1,
                    "rounded-l-full": i === 0,
                    "rounded-r-full": i === categories.length - 1,
                  },
                )}
                style={{
                  color: isActive ? "white" : baseColor[6],
                  borderColor: isActive ? "transparent" : baseColor[6],
                  backgroundColor: isActive ? baseColor[6] : null,
                }}
              >
                {key}
              </div>
            )
          })}
        </nav>

        <div className="relative max-w-md mb-4 mx-auto text-center">
          <FlipMove
            staggerDelayBy={10}
            duration={200}
            enterAnimation={{
              from: {
                transform: "scale(0)",
                opacity: 0,
              },
              to: {
                transform: "",
              },
            }}
            leaveAnimation={{
              from: {
                transform: "",
              },
              to: {
                transform: "scale(0)",
                opacity: 0,
              },
            }}
          >
            {technologies[activeCategory].sort().map((key, i) => (
              <div
                key={key}
                className={classNames("inline-block my-1", {
                  "mr-2": i !== children.length,
                })}
              >
                <Pill>{key}</Pill>
              </div>
            ))}
          </FlipMove>
        </div>
      </Container>
    </ScrollableAnchor>
  )
}

export default Technology
