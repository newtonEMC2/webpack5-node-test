const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: 'development',
  externalsPresets: { node: true, }, // in order to ignore built-in modules like path, fs, etc. *just for webpack 5. In lower versions, target:node
  externals: [nodeExternals()],
  entry: './server.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },

  plugins: [
    new NodemonPlugin()
  ],
}
