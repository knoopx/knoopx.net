const path = require("path")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const purgecss = require("@fullhuman/postcss-purgecss")

const { productName } = require("./package.json")

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development"

  return {
    entry: [
      "core-js/stable",
      "regenerator-runtime/runtime",
      "./src",
      "./src/index.css",
      "file-loader?name=[name]!./src/CNAME",
    ],
    plugins: [
      isDevelopment &&
        new ReactRefreshWebpackPlugin({ disableRefreshCheck: true }),
      new HtmlWebpackPlugin({ title: productName, template: "src/index.ejs" }),
      new ExtractCssChunks({
        filename: isDevelopment ? "[name].css" : "[hash:8].css",
        chunkFilename: isDevelopment ? "[name].[id].css" : "[hash:8].[id].css",
      }),
      !isDevelopment && new CompressionPlugin(),
    ].filter(Boolean),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDevelopment ? "[name].js" : "[chunkhash:8].js",
    },
    resolve: {
      modules: [path.resolve(__dirname, "./src"), "node_modules"],
      extensions: [".js", ".jsx", ".json", ".yaml", ".md"],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: ExtractCssChunks.loader,
              options: { hot: isDevelopment },
            },
            {
              loader: "css-loader",
              options: { modules: { mode: "global" } },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require("tailwindcss"),
                  !isDevelopment &&
                    purgecss({
                      whitelist: ["html", "body"],
                      content: [path.join(__dirname, "./src/**/*.{js,jsx}")],
                      extractors: [
                        {
                          extractor: (content) =>
                            content.match(/[A-Za-z0-9-_:/]+/g),
                          extensions: ["js", "jsx"],
                        },
                      ],
                    }),
                ].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    loose: true,
                  },
                ],
              ],
              plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
              env: {
                production: {
                  presets: ["react-optimize"],
                },
              },
            },
          },
          include: [path.resolve("./src")],
        },
        {
          test: /\.yaml/,
          use: ["json-loader", "yaml-loader"],
        },
        {
          test: /\.(svg)$/i,
          use: {
            loader: "file-loader",
            options: {
              name: "assets/[name]-[hash:8].[ext]",
              esModule: false,
            },
          },
        },
        {
          test: /\.(gif|png|jpe?g)(\?.*)?$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/[name]-[hash:8].[ext]",
                esModule: false,
              },
            },
            "image-maxsize-webpack-loader",
          ],
        },
      ],
    },
  }
}
