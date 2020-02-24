import React, { useRef } from "react"
import { useTrail, animated } from "react-spring"

import useVisiblity from "hooks/useVisibility"

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
    <animated.div className="inline-block w-16" {...props}>
      <div className="relative m-1" style={{ paddingBottom: "100%" }}>
        <img className="object-contain absolute h-full w-full" src={src} />
      </div>
    </animated.div>
  )
}

const TechnologyIcons = (props) => {
  const ref = useRef()
  const isVisible = useVisiblity(ref)

  const trail = useTrail(images.length, {
    reverse: !isVisible,
    config: { mass: 1, tension: 500, friction: 50 },
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : -20}px)`,
    from: { opacity: 0, transform: `translateY(-20px)` },
  })

  return (
    <div ref={ref} className="sm:flex justify-around mb-8 text-center">
      {trail.map((style, index) => {
        return <Image key={images[index]} src={images[index]} style={style} />
      })}
    </div>
  )
}

export default TechnologyIcons
