import React from "react"
import { animated } from "react-spring"
import usePopSpring from "hooks/usePopSpring"
import { Container } from "ui/layout"
import useTheme from "hooks/useTheme"

const About = () => {
  const spring = usePopSpring()
  const { baseColor } = useTheme()

  return (
    <div className="ts white" style={{ backgroundColor: baseColor[6] }}>
      <Container>
        <animated.div
          style={spring}
          className="flex flex-wrap-m flex-wrap-s justify-center"
        >
          <div className="order-0-l order-1">
            <img
              width={300}
              height={300}
              className="ba br-100 bw2"
              src={require("./me.jpg?max-width=300")}
            />
          </div>

          <div className="order-0 order-1-l pl6-l">
            <header className="mb4">
              <h1 className="f1 mb1 mt0">Hello, I'm Víctor</h1>
              <h2 className="f3 fw4 mt1">
                a full-stack web developer from Barcelona.
              </h2>
            </header>

            <div className="f3 fw3 lh-copy measure">
              <p>
                I'm a self-taught <span className="fw6">computer hacker</span>.
                I build <span className="fw6">successful</span> Internet
                businesses with the <span className="fw6">best-of-breed</span>{" "}
                languages and libraries.
              </p>
              <p>
                I develop both <span className="fw6">back-end</span> and{" "}
                <span className="fw6">front-end</span> and deliver{" "}
                <span className="fw6">engaging</span> user experiences in a{" "}
                <span className="fw6">timely manner</span>.
              </p>
            </div>
          </div>
        </animated.div>
      </Container>
    </div>
  )
}

export default About
