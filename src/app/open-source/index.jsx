import React from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { FaHeart } from "react-icons/fa"

import { Container } from "ui/layout"
import Button from "ui/button"

import Repos from "./repos"

const Project = ({ name, url, children, image }) => {
  return (
    <a className="block link" href={url}>
      <div className="relative mb-4" style={{ paddingBottom: "100%" }}>
        <img
          src={image}
          className="object-cover absolute h-full w-full border border-gray-4 rounded"
        />
      </div>
      <div className="block pb-4 sm:px-0">
        <h3 className="mb-0 text-base font-medium gray-7">{name}</h3>
        <h3 className="mt-2 text-sm font-light gray-6">{children}</h3>
      </div>
    </a>
  )
}

const OpenSource = () => {
  return (
    <ScrollableAnchor id="open-source">
      <div className="bg-gray-1">
        <Container className="py-12">
          <header className="mb-8 text-center">
            <h1 className="mb-1 mb-2 text-5xl text-gray-9 font-bold leading-none">
              Open Source
            </h1>
            <h2 className="mt-1 text-2xl text-gray-6 font-normal leading-none">
              projects made with <FaHeart className="inline text-red-6" />
            </h2>
          </header>

          <div className="lg:gap-8 lg:grid lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl text-center text-gray-7 font-semibold">
                Featured Projects
              </h2>
              <div className="mb-8 lg:gap-4 lg:grid lg:grid-cols-2">
                <Project
                  name="Pebble Watchface"
                  url="https://github.com/knoopx/pebble-48h-weather-forecast-watchface-rockyjs/"
                  image={require("./images/pebble-watchface.jpg")}
                >
                  48 hour weather forecast watch face pulling data from
                  darksky.net
                </Project>
                <Project
                  name="Plex Music"
                  url="https://github.com/knoopx/plex-music/"
                  image={require("./images/plex-music-1.png")}
                >
                  Web and desktop client music player for Plex Media Server
                </Project>
                <Project
                  name="Poloniex App"
                  url="https://github.com/knoopx/poloniex-watch-app/"
                  image={require("./images/poloniex.png")}
                >
                  A desktop client for poloniex.com. Watch markets and track
                  your orders from the menu bar.
                </Project>
                <Project
                  name="Eleventh"
                  url="https://github.com/knoopx/eleventh/"
                  image={require("./images/eleventh.png")}
                >
                  An automated, all-in-one dictionary generator and WEP cracker
                </Project>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl text-center text-gray-7 font-semibold">
                Recent Projects
              </h2>
              <Repos />
              <Button href="https://github.com/knoopx" target="__blank">
                Visit my GitHub profile
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </ScrollableAnchor>
  )
}

export default OpenSource
