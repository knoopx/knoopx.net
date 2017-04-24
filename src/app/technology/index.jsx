import React from 'react'
import classNames from 'classnames'
import { inject } from 'mobx-react'

import Pill from 'ui/pill'
import FlipMove from 'react-flip-move'
import { Container } from 'ui/layout'

const technologies = {
  'Front-end': ['React', 'Angular.js', 'LESS', 'SASS', 'vue.js', 'MobX', 'Redux', 'Tachyons', 'Bootstrap', 'Foundation', 'ES6', 'TypeScript', 'JavaScript', 'D3', 'SVG', 'HTML5', 'CSS3', 'PostCSS', 'Babel', 'Webpack'],
  'Back-end': ['Ruby', 'Ruby On Rails', 'Sinatra', 'Node.js', 'Express.js', 'RSpec', 'MySQL', 'SQLite', 'PostgreSQL', 'Redis', 'Memcache', 'MongoDB', 'Firebase', 'RethinkDB', 'REST', 'GraphQL'],
  Other: ['Git', 'GitHub', 'Linux', 'Windows', 'MacOSX', 'Docker', 'Capistrano', 'Ansible', 'Electron', 'React Native', 'Heroku', 'Digital Ocean', 'AWS', 'Puppet', 'Computer Vision', 'Graphite', 'Arduino', 'Raspberry PI'],
}

const categories = Object.keys(technologies)

@inject('baseColor')
export default class Technology extends React.PureComponent {
  state = { category: categories[0] }

  render() {
    const children = technologies[this.state.category]
    return (
      <Container size="w-75-ns">
        <header className="tc mb4">
          <h1 className="f1 mb1 black-90">Skills</h1>
          <h2 className="f3 mt1 fw5 black-50">and technologies</h2>
        </header>

        <nav className="flex mb3 justify-center">
          {categories.map((key, i) => {
            const isActive = key === this.state.category
            return (
              <div
                key={key}
                onClick={() => this.setState({ category: key })}
                className={classNames('br-pill b dib ph3 pv2 ba tc pointer truncate', {
                  'br--right': i !== 0,
                  'br-0': i !== categories.length - 1,
                  'br--left': i !== categories.length - 1,
                })}
                style={{
                  color: isActive ? 'white' : this.props.baseColor[6],
                  borderColor: isActive ? 'transparent' : this.props.baseColor[6],
                  backgroundColor: isActive ? this.props.baseColor[6] : null,
                }}
              >
                {key}
              </div>
            )
          })}
        </nav>

        <div className="cf center tc mb3 measure relative">
          <FlipMove
            staggerDelayBy={10}
            duration={200}
            enterAnimation={{
              from: {
                transform: 'scale(0)',
                opacity: 0,
              },
              to: {
                transform: '',
              },
            }}
            leaveAnimation={{
              from: {
                transform: '',
              },
              to: {
                transform: 'scale(0)',
                opacity: 0,
              },
            }}
          >
            {technologies[this.state.category].sort().map((key, i) => (
              <div
                key={key}
                className={classNames('dib mv1', { mr2: i !== children.length })}
              >
                <Pill>{key}</Pill>
              </div>
            ))}
          </FlipMove>
        </div>
      </Container>
    )
  }
}
