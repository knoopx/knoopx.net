import openColor from "open-color";
import type { Config } from "tailwindcss";

const oc = Object.keys(openColor).reduce(
  (rest, key) => ({
    ...rest,
    ...(Array.isArray(openColor[key])
      ? openColor[key].reduce(
          (colors, color, i) => ({
            ...colors,
            [`${key}-${i}`]: color,
          }),
          {},
        )
      : { [key]: openColor[key] }),
  }),
  {},
);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        inherit: "inherit",
        ...oc,
      },
    },
  },
  plugins: [],
} satisfies Config;
