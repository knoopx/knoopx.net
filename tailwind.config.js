const openColor = require("open-color")

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
)

module.exports = {
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      ...oc,
      borderColor: (theme) => ({
        default: theme("colors.gray-1"),
        ...theme("colors"),
      }),
    },
    variants: {},
    plugins: [],
  },
}
