import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { inject } from 'mobx-react'
import { Container } from 'ui/layout'
import { TimeLine, TimeLineEvent } from 'ui/time-line'

import TagList from 'ui/tag-list'

import experience from 'content/experience'

@inject('baseColor')
export default class Experience extends React.PureComponent {
  render() {
    return (
      <ScrollableAnchor id="experience">
        <Container size="w-75-l">
          <header className="tc mb4">
            <h1 className="f1 mb1 black-90">Professional Experience</h1>
            <h2 className="f3 mt1 fw4 black-50">more than ten years of web development</h2>
          </header>

          <TimeLine activeColor={this.props.baseColor[6]}>
            {experience.map(({ range, name, url, description, challenges, tags, images }, index) => (
              <TimeLineEvent
                key={index}
                right={
                  <a href={url} className="link f3 fw5 black-90 " target="__blank" rel="nofollow"><h4 className="mv0">{name}</h4></a>
                }
              >
                <em className="black-50">{range} </em>
                <div className="cf mb2 lh-copy">
                  <div className="fl w-50-ns pr4">
                    <p className="measure">{description}</p></div>
                  { challenges && (
                    <div className="fl w-50-ns">
                      <ul className="pl3 measure">
                        {challenges.map((challenge, i) => <li key={i}>{challenge}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
                <TagList tags={tags} />
              </TimeLineEvent>
            ))}
          </TimeLine>
        </Container>
      </ScrollableAnchor>
    )
  }
}
