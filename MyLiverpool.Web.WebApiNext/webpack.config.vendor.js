var IsDevBuild = process.argv.indexOf("--env.prod") < 0;
var Path = require("path");
var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractCss = new ExtractTextPlugin("vendor.css");
var WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    resolve: {
        extensions: ["",".js"]
    },
    module: {
        loaders: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: "url-loader?limit=100000"
            },
            {
                test: /\.css(\?|$)/, loader: ExtractCss.extract(["css-loader"])
            }
        ]
    },
    entry: {
        vendor: [
            "@angular/common",
            "@angular/compiler",
            "@angular/core",
            "@angular/http",
            "@angular/platform-browser",
            "@angular/platform-browser-dynamic",
            "@angular/router",
            "@angular/platform-server",
            "angular2-universal",
            "angular2-universal-polyfills",
            "bootstrap",
            "bootstrap/dist/css/bootstrap.css",
            "es6-shim",
            "es6-promise",
            "event-source-polyfill",
            "jquery",
            "zone.js",
            "ng2-auto-complete"
        ]
    },
    output: {
        path: Path.join(__dirname, "wwwroot", "js"),
        filename: "[name].js",
        library: "[name]_[hash]"
    },
    plugins: [
        ExtractCss,
        new Webpack
        .ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
// Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        new Webpack.optimize.OccurrenceOrderPlugin(),
        new Webpack.DllPlugin({
            path: Path.join(__dirname, "wwwroot", "js", "[name]-manifest.json"),
            name: "[name]_[hash]"
        },
        new WebpackNotifierPlugin({title: "vendorBuild", alwaysNotify: true }))
    ].concat(IsDevBuild
        ? []
        : [
            new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
        ])
};
