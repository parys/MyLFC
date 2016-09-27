"use strict";

/// <binding ProjectOpened='Watch - Development' /> 

var WebpackNotifierPlugin = require('webpack-notifier');module.exports = {    entry: {        file1: "./wwwroot/app/boot.js"    },
    output: {        path: path.join(__dirname, "./dist"),        filename: "[name].js"    },
    devServer: {        contentBase: ".",        host: "localhost",        port: 1669    },
    module: {        loaders: [            {                test: /\.ts?$/,                loader: "babel-loader"            }        ]
    },
    plugins: [
      new WebpackNotifierPlugin()
    ]
};