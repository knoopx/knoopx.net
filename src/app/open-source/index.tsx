import { useRef } from "react";
import classNames from "classnames";
import { FaHeart } from "react-icons/fa";

import { Container } from "ui/layout";
import Button from "ui/button";
import projects from "content/open-source";
import useHover from "hooks/useHover";
import PanZoom from "ui/pan-zoom";

import Repos from "./repos";

// Import all images
import rentomatic from "./images/rentomatic.png";
import pullApp1 from "./images/pull-app-1.png";
import alpineRpi from "./images/alpine-rpi.png";
import cmcMenulet from "./images/cmc-menulet.png";
import atomIntentions from "./images/atom-intentions-javascript.png";
import eslintPlugin from "./images/eslint-plugin-jsx-classname.png";
import huelet from "./images/huelet.png";
import pebbleWatchface from "./images/pebble-watchface.jpg";
import plexMusic1 from "./images/plex-music-1.png";
import poloniex from "./images/poloniex.png";
import eleventh from "./images/eleventh.png";
import nixDesktop from "./images/nix-desktop.png";
import llmWorkbench from "./images/llm-workbench.png";
import piConfig from "./images/pi-config.png";
import vicinaeExtensions from "./images/vicinae-extensions.png";

interface ProjectData {
  name: string;
  url: string;
  image: string;
  description: string;
  date?: string;
  tags?: string[];
  framed?: boolean;
}

interface ProjectProps {
  name: string;
  url: string;
  children: React.ReactNode;
  image: string;
  tags?: string[];
  framed?: boolean;
}

const imageMap: Record<string, string> = {
  "rentomatic.png": rentomatic,
  "pull-app-1.png": pullApp1,
  "alpine-rpi.png": alpineRpi,
  "cmc-menulet.png": cmcMenulet,
  "atom-intentions-javascript.png": atomIntentions,
  "eslint-plugin-jsx-classname.png": eslintPlugin,
  "huelet.png": huelet,
  "pebble-watchface.jpg": pebbleWatchface,
  "plex-music-1.png": plexMusic1,
  "poloniex.png": poloniex,
  "eleventh.png": eleventh,
  "nix-desktop.png": nixDesktop,
  "llm-workbench.png": llmWorkbench,
  "pi-config.png": piConfig,
  "vicinae-extensions.png": vicinaeExtensions,
};

const Project = ({
  name,
  url,
  children,
  image,
  tags = [],
  framed = false,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useHover(ref);
  const imageUrl = imageMap[image] || image;

  return (
    <a className="block link" href={url}>
      <div
        ref={ref}
        className="relative mb-4"
        style={{ paddingBottom: "100%" } as React.CSSProperties}
      >
        <PanZoom
          className={classNames({
            "border border-gray-4 rounded bg-cover": framed,
            "bg-contain": !framed,
          })}
          active={isHovered}
          image={imageUrl}
        />
      </div>
      <div className="block pb-4 sm:px-0">
        <h3 className="mb-0 text-base font-medium gray-7">{name}</h3>
        <h3 className="mt-2 text-sm font-light gray-6">{children}</h3>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-0.5 text-xs rounded bg-gray-2 text-gray-7"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

const OpenSource = () => {
  const projectArray = projects as ProjectData[];

  const gridItems = projectArray
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .map(({ image, description, tags, framed, ...project }) => (
      <Project {...project} image={image} tags={tags} framed={framed}>
        {description}
      </Project>
    ));

  gridItems.splice(
    2,
    0,
    <div className="order-last lg:order-none my-8 lg:my-0 col-span-2 row-span-2">
      <Repos />
      <Button href="https://github.com/knoopx" target="__blank">
        Visit my GitHub profile
      </Button>
    </div>,
  );

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
  );
};

export default OpenSource;
