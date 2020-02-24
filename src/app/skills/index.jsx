import React from "react"
import ScrollableAnchor from "react-scrollable-anchor"

import { Container } from "ui/layout"
import Link from "ui/link"

import TechnologyIcons from "./technology-icons"

const Block = ({ title, children }) => {
  return (
    <div className="px-8 text-center">
      <h2 className="block mb-4 text-2xl text-gray-9 font-medium">{title}</h2>
      <div className="mb-8 text-base leading-normal">{children}</div>
    </div>
  )
}

const Skills = (props) => {
  return (
    <ScrollableAnchor id="skills">
      <Container className="py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-2 text-5xl text-gray-9 font-bold leading-none">
            Top-notch web development
          </h1>
          <h2 className="text-2xl text-gray-6 font-normal leading-none">
            with industry-leading technologies
          </h2>
        </header>

        <div className="gap-4 grid lg:grid-cols-3">
          <Block title="Front-end development">
            <p>
              Rich, interactive,{" "}
              <Link href="https://en.wikipedia.org/wiki/Responsive_web_design">
                responsive
              </Link>{" "}
              and{" "}
              <Link href="https://en.wikipedia.org/wiki/Progressive_web_app">
                progressive
              </Link>{" "}
              web applications that run on any device and platform. From static
              web sites to{" "}
              <Link href="https://en.wikipedia.org/wiki/E-commerce">
                e-commerce
              </Link>
              ,{" "}
              <Link href="https://en.wikipedia.org/wiki/Software_as_a_service">
                SaaS
              </Link>{" "}
              and{" "}
              <Link href="https://en.wikipedia.org/wiki/Content_management_system">
                CMS
              </Link>
              , I build web applications that fulfil today's requirements.
            </p>
          </Block>

          <Block title="Back-end development">
            <p>
              Robust, scalable and maintainable back-ends to support all your
              application needs. APIs, authentication, internationalization,
              data persistence, file storage, task automation and integrations
              with third-parties.
            </p>
          </Block>

          <Block title="Other skills">
            <p>
              Infrastructure management, application deployment and version
              control following industry's best practices.
            </p>
          </Block>
        </div>

        <TechnologyIcons />
      </Container>
    </ScrollableAnchor>
  )
}

export default Skills
