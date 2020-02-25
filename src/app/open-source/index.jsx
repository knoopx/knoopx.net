import React, { useRef } from "react"
import classNames from "classnames"
import { FaHeart } from "react-icons/fa"

import { Container } from "ui/layout"
import Button from "ui/button"
import projects from "content/open-source"
import useHover from "hooks/useHover"
import PanZoom from "ui/pan-zoom"

import Repos from "./repos"

const Project = ({ name, url, children, image, framed = false }) => {
  const ref = useRef()
  const isHovered = useHover(ref)
  return (
    <a className="block link" href={url}>
      <div
        ref={ref}
        className="relative mb-4"
        style={{ paddingBottom: "100%" }}
      >
        <PanZoom
          className={classNames({
            "border border-gray-4 rounded bg-cover": framed,
            "bg-contain": !framed,
          })}
          active={isHovered}
          image={image}
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
  const gridItems = projects
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ image, description, ...project }) => (
      <Project {...project} image={require(`./images/${image}`)}>
        {description}
      </Project>
    ))

  gridItems.splice(
    2,
    0,
    <div className="order-last lg:order-none my-8 lg:my-0 col-span-2 row-span-2">
      <Repos />
      <Button href="https://github.com/knoopx" target="__blank">
        Visit my GitHub profile
      </Button>
    </div>,
  )

  return (
    <section id="open-source">
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

          <div className="flex flex-col lg:gap-8 lg:grid lg:grid-cols-4">
            {gridItems}
          </div>
        </Container>
      </div>
    </section>
  )
}

export default OpenSource
