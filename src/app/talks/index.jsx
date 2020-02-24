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
    <a
      ref={ref}
      className="relative block overflow-hidden mb-4 rounded-lg link"
      href={url}
      style={{ paddingBottom: "100%" }}
    >
      <animated.img
        className="object-contain absolute h-full w-full"
        src={image}
        style={spring}
      />

      <div
        className="absolute h-full w-full"
        style={{ backgroundColor, opacity: 0.8 }}
      />

      <div className="absolute flex flex-col items-center justify-center h-full w-full p-16 lg:p-8 text-center text-white ts">
        <h3 className="mb-4 text-2xl font-medium">{title}</h3>
        <p className="leading-normal">{children}</p>
      </div>
    </a>
  )
}

const Talks = () => {
  return (
    <ScrollableAnchor id="talks">
      <Container className="py-12">
        <header className="mb-8 text-center">
          <h1 className="mb-1 mb-2 text-5xl text-gray-9 font-bold leading-none">
            Talks
          </h1>
          <h2 className="mt-1 text-2xl text-gray-6 font-normal leading-none">
            Slides from the talks I did at{" "}
            <Link href="http://itnig.net/">itnig</Link> coworking space
          </h2>
        </header>

        <div className="lg:gap-4 lg:grid lg:grid-cols-2">
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
