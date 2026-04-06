import { Container } from "ui/layout";
import recommendations from "content/recommendations";

import jordiRubio from "./jordi-rubio.jpg";
import miguelRos from "./miguel-ros.jpg";

interface Recommendation {
  body: string;
  name: string;
  avatar: string;
  role: string;
}

const avatarMap: Record<string, string> = {
  "jordi-rubio.jpg": jordiRubio,
  "miguel-ros.jpg": miguelRos,
};

const Recommendations = () => {
  return (
    <Container>
      <div className="gap-4 grid lg:grid-cols-2">
        {(recommendations as Recommendation[]).map(
          ({ body, name, avatar, role }, i) => (
            <blockquote
              key={i}
              className="flex flex-auto flex-col justify-between mb-8 text-center text-gray-9 sm:text-left"
            >
              <cite className="max-w-md mb-4 text-base lg:text-2xl lg:text-xl font-serif leading-normal">
                "{body}"
              </cite>

              <div className="flex items-center self-center lg:self-start mt-auto">
                <div className="w-8 sm:w-16">
                  <img
                    src={avatarMap[avatar] || avatar}
                    className="block h-8 w-8 sm:h-16 sm:w-16 border border-gray-4 rounded-full"
                    alt={name}
                  />
                </div>
                <div className="pl-4 leading-none">
                  <div className="text-sm uppercase">{name}</div>
                  <div className="text-gray-6 italic">{role}</div>
                </div>
              </div>
            </blockquote>
          ),
        )}
      </div>
    </Container>
  );
};

export default Recommendations;
