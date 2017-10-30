const { DefinePlugin } = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    app: resolve(__dirname, "app/App.js")
  },
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: process.env.NODE_ENV === 'development' ? "/dist/" : "/react-duck-typing/dist/"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [resolve('app')],
        loader: 'babel-loader'
      },
      {
        test: /.(sass|scss)$/,
        include: [resolve('app')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.(ogv|ogg|mp3|mp4|wav|mpe?g)$/i,
        use: 'file-loader'
      },
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
    ]
  },
  resolve: {
    modules: ['node_modules', resolve('app'),]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};