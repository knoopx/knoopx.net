import { Container } from "ui/layout";

import TechnologyIcons from "./technology-icons";

interface BlockProps {
  title: string;
  children: React.ReactNode;
}

const Block = ({ title, children }: BlockProps) => {
  return (
    <div className="px-8 text-center">
      <h2 className="block mb-4 text-2xl text-gray-9 font-medium">{title}</h2>
      <div className="mb-8 text-base leading-normal">{children}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <Container className="py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-2 text-5xl text-gray-9 font-bold leading-none">
            Full-stack, AI/ML & Systems
          </h1>
          <h2 className="text-2xl text-gray-6 font-normal leading-none">
            building intelligent systems from infrastructure to cloud
          </h2>
        </header>

        <div className="gap-4 grid lg:grid-cols-4">
          <Block title="Web Applications">
            <p>
              18+ years of experience building scalable web platforms. From
              e-commerce to SaaS, I build robust applications with a focus on
              performance and maintainability.
            </p>
          </Block>

          <Block title="AI/ML Focus">
            <p>
              Currently focusing on the practical application of LLMs and
              agentic workflows. Extensive experience with prompt/context
              engineering, model deployment into production environments.
            </p>
          </Block>

          <Block title="Systems & Linux">
            <p>
              Deep expertise in Linux internals and system administration.
              Specializing in NixOS for reproducible infrastructure.
            </p>
          </Block>

          <Block title="Hardware & Design">
            <p>
              Industrial design and embedded systems development. Proficient in
              CAD modeling, 3D printing, and rapid prototyping for IoT and
              medical hardware.
            </p>
          </Block>
        </div>

        <TechnologyIcons />
      </Container>
    </section>
  );
};

export default Skills;
