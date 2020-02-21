import React from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import classNames from "classnames"
import { inject, observer, useLocalStore } from "mobx-react"
import FlipMove from "react-flip-move"

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

const Technology = ({ baseColor }) => {
  const store = useLocalStore(() => ({ category: categories[0] }))
  const children = technologies[store.category]
  return (
    <ScrollableAnchor id="technology">
      <Container size="w-75-ns">
        <header className="mb4 tc">
          <h1 className="black-90 f1 mb1">Skills</h1>
          <h2 className="black-50 f3 fw5 mt1">and technologies</h2>
        </header>

        <nav className="flex justify-center mb3">
          {categories.map((key, i) => {
            const isActive = key === store.category
            return (
              <div
                key={key}
                onClick={() => {
                  store.category = key
                }}
                className={classNames(
                  "br-pill b dib ph3 pv2 ba tc pointer truncate",
                  {
                    "br--right": i !== 0,
                    "br-0": i !== categories.length - 1,
                    "br--left": i !== categories.length - 1,
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

        <div className="relative center cf mb3 measure tc">
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
            {technologies[store.category].sort().map((key, i) => (
              <div
                key={key}
                className={classNames("dib mv1", {
                  mr2: i !== children.length,
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

export default inject("baseColor")(observer(Technology))
