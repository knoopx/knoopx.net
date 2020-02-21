import React from "react"

import { Container } from "ui/layout"
import recommendations from "content/recommendations"

const Recommendations = (props) => {
  return (
    <Container size="w-75-l">
      <div className="flex flex-wrap-s">
        {recommendations.map(({ body, name, avatar, role }, i) => (
          <blockquote
            key={i}
            className="flex flex-column justify-between black-90 mb4 ml0 mr0 mt0 pr0 tc tl-ns"
          >
            <p className="f3-l f4-m f5 i lh-copy measure mt0 serif">“{body}”</p>
            <cite className="self-center self-start-ns dt">
              <div className="dtc v-mid w2 w3-ns">
                <img
                  src={require(`./${avatar}`)}
                  className="b--black-10 ba br-100 db h2 h3-ns w2 w3-ns"
                />
              </div>
              <div className="dtc pl3 v-mid">
                <div className="f6 fs-normal tracked ttu">{name}</div>
                <div className="gray">{role}</div>
              </div>
            </cite>
          </blockquote>
        ))}
      </div>
    </Container>
  )
}

export default Recommendations
