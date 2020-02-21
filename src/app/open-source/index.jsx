import React from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { FaHeart } from "react-icons/fa"

import { Container } from "ui/layout"
import Button from "ui/button"

import Repos from "./repos"

const Project = ({ name, url, children, image }) => {
  return (
    <a className="w-50 w-50-ns link pa2-ns ph2" href={url}>
      <div className="aspect-ratio aspect-ratio--1x1">
        <img
          style={{ backgroundImage: `url("${image}")` }}
          className="overflow-hidden bg-center aspect-ratio--object br2 cover db"
        />
      </div>
      <div className="db pb3 ph0-ns">
        <h3 className="black-70 f5 fw5 mb0">{name}</h3>
        <h3 className="black-60 f6 fw3 mt2">{children}</h3>
      </div>
    </a>
  )
}

const OpenSource = (props) => {
  return (
    <ScrollableAnchor id="open-source">
      <div className="bg-near-white">
        <Container size="w-75-l">
          <header className="mb4 tc">
            <h1 className="black-90 f1 mb1">Open Source</h1>
            <h2 className="black-50 f3 fw4 mt1">
              projects made with
              <FaHeart className="red" />
            </h2>
          </header>

          <div className="w-100 cf">
            <div className="w-50-l w-60-m w-70-ns fl-ns fn pr4-ns tl-ns">
              <h2 className="fw6 tc">Featured Projects</h2>

              <div className="flex flex-wrap mb4 na2">
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

            <div className="w-30-ns w-40-m w-50-l fl-ns fn tl-ns">
              <h2 className="fw6 tc">Recent Projects</h2>
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
