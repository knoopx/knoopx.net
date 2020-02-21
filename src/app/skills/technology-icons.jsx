import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"
import { Transition } from "react-move"

const Image = ({ src, ...props }) => {
  return (
    <div className="dib w3" {...props}>
      <div className="aspect-ratio aspect-ratio--1x1 ma1">
        <div
          className="aspect-ratio--object contain"
          style={{ background: `url("${src}") center no-repeat` }}
        />
      </div>
    </div>
  )
}

const images = [
  require("./images/html5.svg"),
  require("./images/css3.svg"),
  require("./images/javascript.svg"),
  require("./images/react.svg"),
  require("./images/angular.svg"),
  require("./images/ruby.svg"),
  require("./images/rails.svg"),
  require("./images/nodejs.svg"),
  require("./images/mysql.svg"),
  require("./images/postgresql.svg"),
  require("./images/mongodb.svg"),
  require("./images/redis.svg"),
  // require('./images/webpack.svg'),
  // require('./images/electron.svg'),
  require("./images/git.svg"),
]

const TechnologyIcons = (props) => {
  const [isVisible, setVisible] = useState(false)

  const onVisibilityChange = (state) => {
    setVisible(state)
  }

  return (
    <VisibilitySensor delayedCall onChange={onVisibilityChange}>
      <Transition
        data={images.map((src) => ({ src }))}
        getKey={(item, i) => i}
        update={() => ({
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20,
        })}
        stagger={20}
        staggerGroup
      >
        {(items) => (
          <div className="flex-ns justify-around mb4 tc">
            {items.map(({ data, state, key }) => (
              <Image
                key={key}
                src={data.src}
                style={{
                  opacity: state.opacity,
                  transform: `translateY(${state.y}px)`,
                }}
              />
            ))}
          </div>
        )}
      </Transition>
    </VisibilitySensor>
  )
}

export default TechnologyIcons
