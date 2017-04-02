import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Link from 'ui/link'
import { inject } from 'mobx-react'
import { Container } from 'ui/layout'
import { Animate } from 'react-move'

@inject('baseColor')
class Talk extends React.PureComponent {
  state = {
    isHovered: false,
    rotate: -10 + (Math.random() * 5),
  }

  render() {
    const { title, url, image, children, baseColor } = this.props
    const backgroundColor = baseColor[7]

    return (
      <Animate data={{ scale: this.state.isHovered ? 1.6 : 1.5, blur: this.state.isHovered ? 1 : 2 }}>
        {({ scale, blur }) => (
          <a className="fl-ns w-100 w-50-ns pa2 link db mb2" href={url} onMouseOver={() => this.setState({ isHovered: true })} onMouseOut={() => this.setState({ isHovered: false })}>
            <div className="aspect-ratio aspect-ratio--1x1 br3 overflow-hidden">
              <div className="aspect-ratio--object" style={{ background: `url("${image}") center no-repeat`, backgroundSize: 'contain', transform: `rotate(${this.state.rotate}deg) scale(${scale})`, filter: `blur(${blur}px) contrast(30%)` }} />
              <div className="aspect-ratio--object" style={{ backgroundColor, opacity: 0.8 }} />
              <div className="aspect-ratio--object flex justify-center items-center pa5 pa4-m w-100 tc white ts">
                <div className="measure">
                  <h3 className="f3 fw5">{title}</h3>
                  <p className="lh-copy">{children}</p>
                </div>
              </div>
            </div>
          </a>
        )}
      </Animate>
    )
  }
}

export default class Talks extends React.PureComponent {
  render() {
    return (
      <ScrollableAnchor id="talks">
        <Container size="w-75-l">
          <header className="tc mb4">
            <h1 className="f1 mb1 black-90">Talks</h1>
            <h2 className="f3 mt1 fw4 black-50">Slides from the talks I did at <Link href="http://itnig.net/">itnig</Link> coworking space</h2>
          </header>

          <div className="cf nl2 nr2">
            <Talk
              title="Collecting Metrics with Graphite and StatsD"
              image="https://speakerd.s3.amazonaws.com/presentations/f69ca570546b0130e3bd12313d091534/slide_5.jpg"
              url="https://speakerdeck.com/knoopx/collecting-metrics-with-graphite-and-statsd"
              url2="https://www.youtube.com/watch?v=K8JerQGJ-Zs"
              date={new Date(2013, 2, 8)}
            >
              Learn how to roll on your own Graphite installation and how to use Etsy's statsd collector to flush your metrics.
            </Talk>
            <Talk
              title="Pimp My Dev Box"
              url="https://speakerdeck.com/knoopx/pimp-my-dev-box"
              image="https://speakerd.s3.amazonaws.com/presentations/503235d441a458000203db97/slide_7.jpg"
              date={new Date(2013, 2, 8)}
            >
              Learn how to dramatically boost your productivity just by enhancing your development toolset.
            </Talk>
          </div>
        </Container>
      </ScrollableAnchor>
    )
  }
}
