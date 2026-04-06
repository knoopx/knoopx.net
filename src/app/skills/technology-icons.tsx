import { useRef } from "react";
import { useTrail, animated } from "react-spring";

import useVisiblity from "hooks/useVisibility";

import html5 from "./images/html5.svg";
import css3 from "./images/css3.svg";
import javascript from "./images/javascript.svg";
import react from "./images/react.svg";
import angular from "./images/angular.svg";
import ruby from "./images/ruby.svg";
import rails from "./images/rails.svg";
import nodejs from "./images/nodejs.svg";
import mysql from "./images/mysql.svg";
import postgresql from "./images/postgresql.svg";
import mongodb from "./images/mongodb.svg";
import redis from "./images/redis.svg";
import webpack from "./images/webpack.svg";
import electron from "./images/electron.svg";
import git from "./images/git.svg";

const images = [
  html5,
  css3,
  javascript,
  react,
  angular,
  ruby,
  rails,
  nodejs,
  mysql,
  postgresql,
  mongodb,
  redis,
  webpack,
  electron,
  git,
];

interface ImageProps {
  src: string;
  style: Record<string, unknown>;
}

const Image = ({ src, style }: ImageProps) => {
  return (
    <animated.div className="inline-block w-16" style={style}>
      <div className="relative m-1" style={{ paddingBottom: "100%" }}>
        <img
          className="object-contain absolute h-full w-full"
          src={src}
          alt=""
        />
      </div>
    </animated.div>
  );
};

const TechnologyIcons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useVisiblity(ref);

  const trail = useTrail(images.length, {
    reverse: !isVisible,
    config: { mass: 1, tension: 500, friction: 50 },
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? `translateY(0px)` : `translateY(-20px)`,
    from: { opacity: 0, transform: `translateY(-20px)` },
  });

  return (
    <div ref={ref} className="sm:flex justify-around mb-8 text-center">
      {trail.map((style, index) => {
        return <Image key={index} src={images[index]} style={style} />;
      })}
    </div>
  );
};

export default TechnologyIcons;
