import React from "react"

import { Container } from "ui/layout"
import { TimeLine, TimeLineEvent } from "ui/time-line"
import TagList from "ui/tag-list"
import experience from "content/experience"
import useTheme from "hooks/useTheme"

const Experience = () => {
  const { baseColor } = useTheme()
  return (
    <section id="experience">
      <Container className="py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-1 mb-2 text-5xl text-gray-9 font-bold leading-none">
            Professional Experience
          </h1>
          <h2 className="mt-1 text-2xl text-gray-6 font-normal leading-none">
            more than ten years of web development
          </h2>
        </header>

        <TimeLine className="mb-8" activeColor={baseColor[6]}>
          {experience.map(
            ({ range, name, url, description, challenges, tags }, index) => (
              <TimeLineEvent
                key={index}
                right={
                  <a
                    href={url}
                    className="text-2xl text-gray-9 font-bold link"
                    target="__blank"
                    rel="nofollow"
                  >
                    <h4>{name}</h4>
                  </a>
                }
              >
                <div className="mb-4 text-gray-6">{range}</div>
                <div className="mb-2 leading-normal lg:gap-4 lg:grid lg:grid-cols-2">
                  <div className="pr-8">
                    <p className="max-w-md mb-8">{description}</p>
                  </div>
                  {challenges && (
                    <ul className="list-disc max-w-md mb-8 pl-4">
                      {challenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <TagList tags={tags} />
              </TimeLineEvent>
            ),
          )}
        </TimeLine>
      </Container>
    </section>
  )
}
export default Experience
