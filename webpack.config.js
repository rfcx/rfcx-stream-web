var NODE_ENV              = process.env.NODE_ENV || 'development',
    path                  = require('path'),
    webpack               = require('webpack'),
    Clean                 = require('clean-webpack-plugin'),
    ExtractTextPlugin     = require('extract-text-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier');

function getExtractLoaders() {
  return NODE_ENV == 'development'

    // Serve fonts and images from less files as modules in development mode.
    ? 'css!autoprefixer?{browsers:["last 2 version", "IE 9"]}!less'

    // Do nothing while building production version.
    : 'raw!autoprefixer?{browsers:["last 2 version", "IE 9"]}!less';
}

module.exports = {
  watch: true,
  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].js'
  },

  externals: {
    "jquery": "jQuery"
  },

  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", getExtractLoaders())
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },

      // Webpack handles fonts and images only in development mode (see .less settings above)
      {
        test: /\.(svg|eot|ttf|woff)/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.(?:png|jpg|gif)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },

  devServer: {
    headers: {
      // Handling issue with CORS font loading
      "Access-Control-Allow-Origin": "*"
    }
  },

  plugins: [
    new Clean(['public']),
    new ExtractTextPlugin('css/app.css', { // [name].css after code splitting
      allChunks: true
      //disable: NODE_ENV == 'development' // Save separate files only for production build
    }),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin()
  ]
};