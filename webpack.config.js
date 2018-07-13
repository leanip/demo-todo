const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const r = url => path.resolve(__dirname, url)

const config = {
  target: 'web',
  entry: r('src/index.js'),
  output: {
    filename: 'bundle.[hash:8]].js',
    path: r('dist/')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|jpeg|bmp|png|gif|svg)$/,
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
  if (argv.mode === 'development') {
    config.devtool = '#cheap-module-eval-source-map'
    config.module.rules.push({
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      })
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
  } else {
    config.entry = {
      app: r('src/index.js'),
      vendor: ['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push({
      test: /\.styl(us)?$/,
      use: ExtractPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      })
    })
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor'
          }
        }
      },
      runtimeChunk: {
        name: 'runtime'
      }
    }
    config.plugins.push(
      new ExtractPlugin('styles.[chunkhash:8].css')
    )
  }

  return config
}