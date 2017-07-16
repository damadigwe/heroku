
var webpack             = require('webpack'),
    ReloadPlugin        = require('webpack-reload-plugin'),
    path                = require('path'),
    ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
    HtmlWebpackPlugin   = require('html-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier'),
    ExtractTextPlugin   = require("extract-text-webpack-plugin");
 
/**
 * Support for extra commandline arguments
 */
var argv = require('optimist')
            .alias('r','release').default('r', false)
            .argv;
            
 /**
 * Useful variables
 */
var cwd = process.cwd();
var DEBUG = !argv.release;
var isDevServer = process.argv.join('').indexOf('webpack-dev-server') > -1;
var version = require(path.resolve(cwd,'package.json')).version;
var reloadHost = "0.0.0.0";
var npmRoot = __dirname + "/node_modules";
var appDir = __dirname + "/app";
var cssDir = __dirname + "/app/css";
var compDir = __dirname + "/app/ts/components";
           
/////// me up            

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

var appRootDir = "../http/";
var appSrcDir = "../http/app/";

module.exports = {
  entry: {
    'polyfills': appRootDir + 'polyfills.ts',
    'vendor': appRootDir + 'vendor.ts',
    'app': appSrcDir + 'ts/app.ts'
  },

 resolve: {
 	 modules: [
        appRootDir+'node_modules', appSrcDir, appSrcDir+'ts', '.', appSrcDir+'resources', appSrcDir+'resources/images' , appSrcDir+'css',
        appSrcDir+'ts/components',appSrcDir+'/ts/components/sytrace-components/model'
      ],
    extensions: [".ts", ".js", ".json", ".css", ".png", ".html"]
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root(appRootDir, 'tsconfig.json') }
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root(appRootDir, 'app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root(appRootDir, 'app'),
        loader: 'raw-loader'
      }
      ,
      { 
        test: /\.json$/, 
        loader: 'json-loader' 
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root(appSrcDir), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new ExtractTextPlugin(appSrcDir+"css/"+"styles.css"),
      new WebpackNotifierPlugin({
        title: "Sytrace",
         contentImage: path.join(appSrcDir, 'resources/images/favicon-32x32.png')
      }),
      
    new HtmlWebpackPlugin({
      template: appSrcDir +'index.html'
    })
  ]
};

