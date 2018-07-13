const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const r = url => path.resolve(__dirname, url)

const config = {
  target: 'web',
  entry: r('src/index.js'),
  output: {
    filename: 'bundle.js',
    path: r('dist/')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|bmp|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-haha.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ]
}



module.exports = (env, argv) => {
  console.log('env: ', env)
  console.log('argv.mode: ', argv.mode)
  if (argv.mode === 'development') {
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
      port: 8000,
      host: '0.0.0.0',
      overlay: {
        errors: true
      },
      hot: true
    }
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    )
  }

  return config
}