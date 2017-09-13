const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { productName } = require('./package.json')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    './src',
    './src/index.css',
    'file-loader?name=[name]!./src/CNAME',
  ],

  plugins: [
    new HappyPack({ threads: 4, loaders: ['babel-loader'] }),
    new HtmlWebpackPlugin({ title: productName, template: 'src/index.ejs' }),
    new ExtractTextPlugin('assets/bundle-[hash].css'),
    new webpack.NamedModulesPlugin(),
    new webpack.ExternalsPlugin('commonjs', []),
    new CompressionPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/bundle-[hash].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.yaml', '.md'],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('postcss-import'), require('postcss-cssnext')] },
            },
          ],
        }),
      }, {
        test: /\.jsx?$/,
        use: 'happypack/loader',
        include: [
          path.resolve('./src'),
        ],
      }, {
        test: /\.json$/,
        use: 'json-loader',
      }, {
        test: /\.yaml/,
        use: ['json-loader', 'yaml-loader'],
      }, {
        test: /\.(svg)$/i,
        use: 'file-loader?name=assets/[name]-[hash:20].[ext]',
      }, {
        test: /\.(gif|png|jpe?g)(\?.*)?$/i,
        use: ['file-loader?name=assets/[name]-[hash:20].[ext]', 'image-maxsize-webpack-loader'],
      },
    ],
  },
}
