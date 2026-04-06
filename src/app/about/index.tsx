import { useRef } from "react";
import { animated } from "react-spring";

import usePopSpring from "hooks/usePopSpring";
import { Container } from "ui/layout";
import { useTheme } from "hooks/useTheme";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const spring = usePopSpring(ref, { partial: true });
  const { baseColor } = useTheme();

  return (
    <div style={{ backgroundColor: baseColor[6] } as React.CSSProperties}>
      <Container className="pb-12 text-white ts">
        <animated.div ref={ref} style={spring}>
          <header className="mb-8 text-center">
            <h1 className="mb-2 text-5xl font-semibold leading-none">
              Hi, I'm Víctor
            </h1>
            <h2 className="text-2xl">
              a polyglot software engineer from Barcelona.
            </h2>
          </header>

          <div className="mx-auto max-w-prose text-2xl font-light leading-normal">
            <p className="mb-6">
              I've been building software for over 20 years. I'm an engineer who
              operates across the entire stack, with deep experience in{" "}
              <span className="font-semibold">systems programming</span>,{" "}
              <span className="font-semibold">web applications</span>, and{" "}
              <span className="font-semibold">AI/ML</span> infrastructure. I've
              spent a large part of my career as a{" "}
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
        </animated.div>
      </Container>
    </div>
  );
};

export default About;
