import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { Transition } from 'react-move'

function Image({ src, ...props }) {
  return (
    <div className="dib w3" {...props}>
      <div className="ma1 aspect-ratio aspect-ratio--1x1">
        <div className="aspect-ratio--object contain" style={{ background: `url("${src}") center no-repeat` }} />
      </div>
    </div>
  )
}

const images = [
  require('./images/html5.svg'),
  require('./images/css3.svg'),
  require('./images/javascript.svg'),
  require('./images/react.svg'),
  require('./images/angular.svg'),
  require('./images/ruby.svg'),
  require('./images/rails.svg'),
  require('./images/nodejs.svg'),
  require('./images/mysql.svg'),
  require('./images/postgresql.svg'),
  require('./images/mongodb.svg'),
  require('./images/redis.svg'),
  // require('./images/webpack.svg'),
  // require('./images/electron.svg'),
  require('./images/git.svg'),
]

export default class TechnologyIcons extends React.PureComponent {
  state = { isVisible: false }

  render() {
    return (
      <VisibilitySensor delayedCall onChange={this.onVisibilityChange}>
        <Transition
          data={images.map(src => ({ src }))}
          getKey={(item, i) => i}
          update={() => ({ opacity: this.state.isVisible ? 1 : 0, y: this.state.isVisible ? 0 : -20 })}
          stagger={20}
          staggerGroup
        >
          { items => (
            <div className="flex-ns justify-around tc mb4">
              {items.map(({ data, state, key }) => <Image key={key} src={data.src} style={{ opacity: state.opacity, transform: `translateY(${state.y}px)` }} />)}
            </div>
          ) }
        </Transition>
      </VisibilitySensor>
    )
  }

  onVisibilityChange = (isVisible) => {
    this.setState({ isVisible })
  }
}
