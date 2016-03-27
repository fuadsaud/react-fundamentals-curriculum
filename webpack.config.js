var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: [
    './app/index.js',
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist',
    publicPath: '/',
  },
  plugins: [HTMLWebpackPluginConfig],
  preLoaders: [
    { test: /\.js$/, loader: 'source-map-loader' },
  ],
  resolve: {
    alias: {
      components: __dirname + '/app/components',
      config: __dirname + '/app/config/',
      containers: __dirname + '/app/containers',
      lib: __dirname + '/app/lib',
      styles: __dirname + '/app/styles',
    }
  }
}
