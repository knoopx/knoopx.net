import React, { useRef, useState } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { useSpring, animated } from "react-spring"

import useHover from "hooks/useHover"
import useTheme from "hooks/useTheme"
import Link from "ui/link"
import { Container } from "ui/layout"

const Talk = ({ title, url, image, children }) => {
  const ref = useRef()
  const { baseColor } = useTheme()
  const isHovered = useHover(ref)
  const rotate = -10 + Math.random() * 5

  const backgroundColor = baseColor[7]
  const spring = useSpring({
    transform: `rotate(${rotate}deg) scale(${isHovered ? 1.6 : 1.5})`,
    filter: `blur(${isHovered ? 1 : 2}px) contrast(30%)`,
  })
  return (
    <a ref={ref} className="w-100 w-50-ns db fl-ns link mb2 pa2" href={url}>
      <div className="overflow-hidden aspect-ratio aspect-ratio--1x1 br3">
        <animated.div
          className="aspect-ratio--object"
          style={{
            background: `url("${image}") center no-repeat`,
            backgroundSize: "contain",
            ...spring,
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
  )
}

const Talks = () => {
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
