import React from 'react'
import { Container } from 'ui/layout'
import recommendations from 'content/recommendations'

export default class Recommendations extends React.PureComponent {
  render() {
    return (
      <Container size="w-75-l">
        <div className="flex flex-wrap-s">
          {recommendations.map(({ body, name, avatar, role }, i) => (
            <blockquote key={i} className="ml0 mt0 mr0 mb4 pr0 black-90 flex flex-column justify-between tc tl-ns">
              <p className="f5 f4-m f3-l lh-copy measure mt0 i serif">“{body}”</p>
              <cite className="dt self-center self-start-ns">
                <div className="dtc w2 w3-ns v-mid">
                  <img src={avatar} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                </div>
                <div className="dtc v-mid pl3">
                  <div className="f6 ttu tracked fs-normal">{name}</div>
                  <div className="gray">{role}</div>
                </div>
              </cite>
            </blockquote>
            ))}
        </div>
      </Container>
    )
  }
}
