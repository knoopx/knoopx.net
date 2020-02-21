import React from "react"
import ScrollableAnchor from "react-scrollable-anchor"

import { Container } from "ui/layout"
import { TimeLine, TimeLineEvent } from "ui/time-line"
import TagList from "ui/tag-list"
import experience from "content/experience"
import useTheme from "hooks/useTheme"

const Experience = () => {
  const { baseColor } = useTheme()
  return (
    <ScrollableAnchor id="experience">
      <Container size="w-75-l">
        <header className="mb4 tc">
          <h1 className="black-90 f1 mb1">Professional Experience</h1>
          <h2 className="black-50 f3 fw4 mt1">
            more than ten years of web development
          </h2>
        </header>

        <TimeLine className="mb4" activeColor={baseColor[6]}>
          {experience.map(
            ({ range, name, url, description, challenges, tags }, index) => (
              <TimeLineEvent
                key={index}
                right={
                  <a
                    href={url}
                    className="black-90 f3 fw5 link"
                    target="__blank"
                    rel="nofollow"
                  >
                    <h4 className="mv0">{name}</h4>
                  </a>
                }
              >
                <em className="black-50">{range} </em>
                <div className="cf lh-copy mb2">
                  <div className="w-50-ns fl pr4">
                    <p className="measure">{description}</p>
                  </div>
                  {challenges && (
                    <div className="w-50-ns fl">
                      <ul className="measure pl3">
                        {challenges.map((challenge, i) => (
                          <li key={i}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <TagList tags={tags} />
              </TimeLineEvent>
            ),
          )}
        </TimeLine>
      </Container>
    </ScrollableAnchor>
  )
}
export default Experience
