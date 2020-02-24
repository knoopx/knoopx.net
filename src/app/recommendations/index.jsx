import React from "react"

import { Container } from "ui/layout"
import recommendations from "content/recommendations"

const Recommendations = () => {
  return (
    <Container>
      <div className="gap-4 grid lg:grid-cols-2">
        {recommendations.map(({ body, name, avatar, role }, i) => (
          <blockquote
            key={i}
            className="flex flex-auto flex-col justify-between mb-8 text-center text-gray-9 sm:text-left"
          >
            <cite className="max-w-md mb-4 text-base lg:text-2xl lg:text-xl font-serif leading-normal">
              “{body}”
            </cite>

            <div className="flex items-center self-center lg:self-start mt-auto">
              <div className="w-8 sm:w-16">
                <img
                  src={require(`./${avatar}`)}
                  className="block h-8 w-8 sm:h-16 sm:w-16 border rounded-full"
                />
              </div>
              <div className="pl-4 leading-none">
                <div className="text-sm uppercase">{name}</div>
                <div className="text-gray-6 italic">{role}</div>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </Container>
  )
}

export default Recommendations
