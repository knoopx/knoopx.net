import React from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { inject, useLocalStore } from "mobx-react"
import { Animate } from "react-move"

import Link from "ui/link"
import { Container } from "ui/layout"

const Talk = inject("baseColor")((props) => {
  const store = useLocalStore(() => ({
    isHovered: false,
    rotate: -10 + Math.random() * 5,
  }))

  const { title, url, image, children, baseColor } = props
  const backgroundColor = baseColor[7]

  return (
    <Animate
      data={{
        scale: store.isHovered ? 1.6 : 1.5,
        blur: store.isHovered ? 1 : 2,
      }}
    >
      {({ scale, blur }) => (
        <a
          className="w-100 w-50-ns db fl-ns link mb2 pa2"
          href={url}
          onMouseOver={() => {
            store.isHovered = true
          }}
          onMouseOut={() => {
            store.isHovered = false
          }}
        >
          <div className="overflow-hidden aspect-ratio aspect-ratio--1x1 br3">
            <div
              className="aspect-ratio--object"
              style={{
                background: `url("${image}") center no-repeat`,
                backgroundSize: "contain",
                transform: `rotate(${store.rotate}deg) scale(${scale})`,
                filter: `blur(${blur}px) contrast(30%)`,
              }}
            />
            <div
              className="aspect-ratio--object"
              style={{ backgroundColor, opacity: 0.8 }}
            />
            <div className="flex items-center justify-center w-100 aspect-ratio--object pa4-m pa5 tc ts white">
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
})

const Talks = (props) => {
  return (
    <ScrollableAnchor id="talks">
      <Container size="w-75-l">
        <header className="mb4 tc">
          <h1 className="black-90 f1 mb1">Talks</h1>
          <h2 className="black-50 f3 fw4 mt1">
            Slides from the talks I did at{" "}
            <Link href="http://itnig.net/">itnig</Link> coworking space
          </h2>
        </header>

        <div className="cf nl2 nr2">
          <Talk
            title="Collecting Metrics with Graphite and StatsD"
            image="https://speakerd.s3.amazonaws.com/presentations/f69ca570546b0130e3bd12313d091534/slide_5.jpg"
            url="https://speakerdeck.com/knoopx/collecting-metrics-with-graphite-and-statsd"
            url2="https://www.youtube.com/watch?v=K8JerQGJ-Zs"
            date={new Date(2013, 2, 8)}
          >
            Learn how to roll on your own Graphite installation and how to use
            Etsy's statsd collector to flush your metrics.
          </Talk>
          <Talk
            title="Pimp My Dev Box"
            url="https://speakerdeck.com/knoopx/pimp-my-dev-box"
            image="https://speakerd.s3.amazonaws.com/presentations/503235d441a458000203db97/slide_7.jpg"
            date={new Date(2013, 2, 8)}
          >
            Learn how to dramatically boost your productivity just by enhancing
            your development toolset.
          </Talk>
        </div>
      </Container>
    </ScrollableAnchor>
  )
}

export default Talks
