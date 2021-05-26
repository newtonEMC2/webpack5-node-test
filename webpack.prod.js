const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // devtool: 'sourcemap',
  mode: 'development',
  externalsPresets: { node: true, },
  externals: [nodeExternals({
    // modulesDir: path.resolve(__dirname, '../node_modules'),
  })],
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

}
