import { useRef } from "react";
import { animated } from "react-spring";

import usePopSpring from "hooks/usePopSpring";
import { Container } from "ui/layout";
import { useTheme } from "hooks/useTheme";

import me from "./me.jpg";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const spring = usePopSpring(ref, { partial: true });
  const { baseColor } = useTheme();

  return (
    <div style={{ backgroundColor: baseColor[6] } as React.CSSProperties}>
      <Container className="pb-12 text-white ts">
        <animated.div
          ref={ref}
          style={spring}
          className="flex flex-wrap lg:flex-no-wrap justify-center"
        >
          <div className="order-1 lg:order-0 lg:w-1/3 px-12 py-12 lg:py-0">
            <img
              className="flex-auto border-4 rounded-full max-w-full"
              src={me}
            />
          </div>

          <div className="order-0 lg:order-1 lg:pl-16">
            <header className="mb-8">
              <h1 className="mb-2 text-5xl font-semibold leading-none">
                Hi, I'm Víctor Martínez
              </h1>
              <h2 className="text-2xl">
                a polyglot software engineer from Barcelona.
              </h2>
            </header>

            <div className="max-w-md text-2xl font-light leading-normal">
              <p className="mb-6">
                I've been building software for over 20 years. I'm an engineer
                who operates across the entire stack, with deep experience in{" "}
                <span className="font-semibold">systems programming</span>,{" "}
                <span className="font-semibold">web applications</span>, and{" "}
                <span className="font-semibold">AI/ML</span> infrastructure.
                I've spent a large part of my career as a{" "}
                <span className="font-semibold">Co-founder & CTO</span>.
              </p>
              <p className="mb-6">
                My expertise ranges from building low-level{" "}
                <span className="font-semibold">Linux systems</span> and{" "}
                <span className="font-semibold">embedded hardware</span> to
                scaling <span className="font-semibold">Ruby on Rails</span> and{" "}
                <span className="font-semibold">React</span> applications.
                Currently, focusing on practical application of{" "}
                <span className="font-semibold">AI/ML</span>.
              </p>
            </div>
          </div>
        </animated.div>
      </Container>
    </div>
  );
};

export default About;
