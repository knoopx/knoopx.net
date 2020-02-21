import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"
import { useTrail, animated } from "react-spring"

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
  require("./images/webpack.svg"),
  require("./images/electron.svg"),
  require("./images/git.svg"),
]

const Image = ({ src, ...props }) => {
  return (
    <animated.div className="dib w3" {...props}>
      <div className="aspect-ratio aspect-ratio--1x1 ma1">
        <div
          className="aspect-ratio--object contain"
          style={{ background: `url("${src}") center no-repeat` }}
        />
      </div>
    </animated.div>
  )
}

const TechnologyIcons = (props) => {
  const [isVisible, setVisible] = useState(false)

  const onVisibilityChange = (state) => {
    setVisible(state)
  }

  const trail = useTrail(images.length, {
    config: { mass: 1, tension: 500, friction: 25 },
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : -20}px)`,
    from: { opacity: 0, transform: `translateY(-20px)` },
  })

  return (
    <VisibilitySensor delayedCall onChange={onVisibilityChange}>
      <div className="flex-ns justify-around mb4 tc">
        {trail.map((style, index) => {
          return <Image key={images[index]} src={images[index]} style={style} />
        })}
      </div>
    </VisibilitySensor>
  )
}

export default TechnologyIcons
