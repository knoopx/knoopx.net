import React from "react"
import ScrollableAnchor from "react-scrollable-anchor"

import { Container } from "ui/layout"
import Link from "ui/link"

import TechnologyIcons from "./technology-icons"

const Block = ({ title, children }) => {
  return (
    <div className="w-100 w-third-ns fl ph4 tc">
      <h2 className="black-90 db fw5">{title}</h2>
      <div className="f5 lh-copy mb4">{children}</div>
    </div>
  )
}

const Skills = (props) => {
  return (
    <ScrollableAnchor id="skills">
      <Container>
        <header className="mb4 tc">
          <h1 className="black-90 f1 mb1">Top-notch web development</h1>
          <h2 className="black-50 f3 fw4 mt1">
            with industry-leading technologies
          </h2>
        </header>

        <div className="cf nl4 nr4">
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
