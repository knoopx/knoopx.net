import { useRef } from "react";
import { useTrail, animated } from "react-spring";

import useVisiblity from "hooks/useVisibility";

import typescript from "./images/typescript.svg";
import react from "./images/react.svg";
import nodejs from "./images/nodejs.svg";
import python from "./images/python.svg";
import rust from "./images/rust.svg";
import nix from "./images/nix.svg";
import linux from "./images/linux.svg";
import postgresql from "./images/postgresql.svg";
import git from "./images/git.svg";
import django from "./images/django.svg";
import mongodb from "./images/mongodb.svg";
import redis from "./images/redis.svg";
import pytorch from "./images/pytorch.svg";

const images = [
  typescript,
  react,
  nodejs,
  python,
  rust,
  nix,
  linux,
  postgresql,
  git,
  django,
  mongodb,
  redis,
  pytorch,
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
