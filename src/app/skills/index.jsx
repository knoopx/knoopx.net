import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Container } from 'ui/layout'
import TechnologyIcons from './technology-icons'
import Link from 'ui/link'

function Block({ title, children }) {
  return (
    <div className="fl ph4 w-100 w-third-ns tc">
      <h2 className="db fw5 black-90">{title}</h2>
      <div className="lh-copy mb4 f5">{children}</div>
    </div>
  )
}

export default class Skills extends React.PureComponent {
  render() {
    return (
      <ScrollableAnchor id="skills">
        <Container>
          <header className="tc mb4">
            <h1 className="f1 mb1 black-90">Top-notch web development</h1>
            <h2 className="f3 mt1 fw4 black-50">with industry-leading technologies</h2>
          </header>

          <div className="cf nl4 nr4">
            <Block title="Front-end development">
              <p>
                Rich, interactive, <Link href="https://en.wikipedia.org/wiki/Responsive_web_design">responsive</Link> and <Link href="https://en.wikipedia.org/wiki/Progressive_web_app">progressive</Link> web applications that run on any device and platform.
                From static web sites to <Link href="https://en.wikipedia.org/wiki/E-commerce">e-commerce</Link>, <Link href="https://en.wikipedia.org/wiki/Software_as_a_service">SaaS</Link> and <Link href="https://en.wikipedia.org/wiki/Content_management_system">CMS</Link>, I build web applications that fulfil today's requirements.
              </p>
              {/* <p>
                <Link href="https://en.wikipedia.org/wiki/HTML5">HTML5</Link>, javascript transpilers, stylesheet pre-processors, frameworks and libraries like <Link href="https://facebook.github.io/react/">React</Link>.
              </p> */}
            </Block>

            <Block title="Back-end development">
              <p>
                Robust, scalable and maintainable back-ends to support all your application needs.
                APIs, authentication, internationalization, data persistence, file storage, task automation and integrations with third-parties.
              </p>
              {/* <p>
                <Link href="https://www.ruby-lang.org/en/">Ruby</Link>, <Link href="https://nodejs.org">Node.js</Link>, SQL and NoSQL databases. Automated testing.
              </p> */}
            </Block>

            <Block title="Other skills">
              <p>
                Infrastructure management, application deployment and version control following industry's best practices.
              </p>
            </Block>
          </div>

          <TechnologyIcons />
        </Container>
      </ScrollableAnchor>
    )
  }
}
