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
                Hello, I'm Víctor
              </h1>
              <h2 className="text-2xl">
                a full-stack web developer from Barcelona.
              </h2>
            </header>

            <div className="max-w-md text-2xl font-light leading-normal">
              <p className="mb-6">
                I'm a self-taught{" "}
                <span className="font-semibold">computer hacker</span>. I build{" "}
                <span className="font-semibold">successful</span> Internet
                businesses with the{" "}
                <span className="font-semibold">best-of-breed</span> languages
                and libraries.
              </p>
              <p className="mb-6">
                I develop both <span className="font-semibold">back-end</span>{" "}
                and <span className="font-semibold">front-end</span> and deliver{" "}
                <span className="font-semibold">engaging</span> user experiences
                in a <span className="font-semibold">timely manner</span>.
              </p>
            </div>
          </div>
        </animated.div>
      </Container>
    </div>
  );
};

export default About;
