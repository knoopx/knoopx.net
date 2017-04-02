import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Container } from 'ui/layout'
import FaHeart from 'react-icons/lib/fa/heart'

import Button from 'ui/button'
import Repos from './repos'

function Project({ name, url, children, image }) {
  return (
    <a className="ph2 w-50 w-50-ns pa2-ns link" href={url} >
      <div className="aspect-ratio aspect-ratio--1x1">
        <img
          style={{ backgroundImage: `url("${image}")` }}
          className="db bg-center cover aspect-ratio--object br2 overflow-hidden"
        />
      </div>
      <div className="ph0-ns pb3 db">
        <h3 className="f5 fw5 mb0 black-70">{name}</h3>
        <h3 className="f6 fw3 mt2 black-60">{children}</h3>
      </div>
    </a>
  )
}

export default class OpenSource extends React.PureComponent {
  render() {
    return (
      <ScrollableAnchor id="open-source">
        <div className="bg-near-white">
          <Container size="w-75-l">
            <header className="mb4 tc">
              <h1 className="f1 mb1 black-90">Open Source</h1>
              <h2 className="f3 mt1 fw4 black-50">projects made with <FaHeart className="red" /></h2>
            </header>

            <div className="cf w-100">
              <div className="tl-ns fn fl-ns w-70-ns pr4-ns w-60-m w-50-l">
                <h2 className="fw6 tc">Featured Projects</h2>

                <div className="flex flex-wrap na2 mb4">
                  <Project
                    name="Pebble Watchface"
                    url="https://github.com/knoopx/pebble-48h-weather-forecast-watchface-rockyjs/"
                    image={require('./images/pebble-watchface.jpg')}
                  >
                    48 hour weather forecast watch face pulling data from darksky.net
                  </Project>
                  <Project
                    name="Plex Music"
                    url="https://github.com/knoopx/plex-music/"
                    image={require('./images/plex-music-1.png')}
                  >
                    Web and desktop client music player for Plex Media Server
                  </Project>
                  <Project
                    name="Poloniex App"
                    url="https://github.com/knoopx/poloniex-watch-app/"
                    image={require('./images/poloniex.png')}
                  >
                    A desktop client for poloniex.com. Watch markets and track your orders from the menu bar.
                  </Project>
                  <Project
                    name="Eleventh"
                    url="https://github.com/knoopx/eleventh/"
                    image={require('./images/eleventh.png')}
                  >
                    An automated, all-in-one dictionary generator and WEP cracker
                  </Project>
                </div>
              </div>

              <div className="tl-ns fn fl-ns w-30-ns w-40-m w-50-l">
                <h2 className="fw6 tc">Recent Projects</h2>
                <Repos />
                <Button href="https://github.com/knoopx" target="__blank">Visit my GitHub profile</Button>
              </div>
            </div>
          </Container>
        </div>
      </ScrollableAnchor>
    )
  }
}
