const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

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
      !isDevelopment && new CleanWebpackPlugin(),
      isDevelopment &&
        new ReactRefreshWebpackPlugin({ disableRefreshCheck: true }),
      new HtmlWebpackPlugin({ title: productName, template: "src/index.ejs" }),
      new ExtractCssChunks({
        filename: isDevelopment ? "[name].css" : "[hash:8].css",
        chunkFilename: isDevelopment ? "[name].[id].css" : "[hash:8].[id].css",
      }),
      new CompressionPlugin(),
    ].filter(Boolean),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDevelopment ? "[name].js" : "[hash:8].js",
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
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require("postcss-import"),
                  require("postcss-cssnext"),
                ],
              },
            },
          ],
        },
        {
          test: /\.jsx?$/,
          use: "babel-loader",
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
              name: "assets/[name]-[hash:20].[ext]",
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
                name: "assets/[name]-[hash:20].[ext]",
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
