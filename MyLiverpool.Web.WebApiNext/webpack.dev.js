var path = require("path");

var Webpack = require("webpack");

var CommonsChunkPlugin = Webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var WebpackNotifierPlugin = require("webpack-notifier");
var helpers = require("./webpack.helpers");

console.log("@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@");

module.exports = {
    devtool: "source-map",

    entry: {
        "polyfills": "./angular2App/polyfills.ts",
        "vendor": "./angular2App/vendor.ts",
        "app": "./angular2App/app/boot.ts"
    },

    output: {
        path: path.join(__dirname, "wwwroot/"),
        filename: "dist/[name].bundle.js",
        publicPath: "/"
    },

    resolve: {
        extensions: [".ts", ".js", ".json", ".css", ".scss", ".html"]
    },

    devServer: {
        historyApiFallback: true,
        stats: "minimal",
        outputPath: path.join(__dirname, "wwwroot/")
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    "awesome-typescript-loader",
                    "angular2-template-loader",
                    "source-map-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                exclude: /node_modules/,
                loader: "file?name=assets/[name]-[hash:6].[ext]"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.html$/,
                loader: "raw"
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: "imports?jQuery=jquery"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "postcss", "sass"]
            },
            {
                test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,

                loader: "url-loader?limit=100000&name=fonts/[name].[ext]"
            }
        ],
        exprContextCritical: false
    },

    plugins: [
        new CleanWebpackPlugin(
            [
                "./wwwroot/dist",
                "./wwwroot/fonts",
                "./wwwroot/assets"
            ]
        ),
        new CommonsChunkPlugin({
            name: ["vendor", "polyfills"]
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: "body",
            chunksSortMode: helpers.packageSort(["polyfills", "vendor", "app"]),
            template: "angular2App/index.html"
        }),
        new CopyWebpackPlugin([
            { from: "./angular2App/images/*.*", to: "assets/", flatten: true }
        ]),
        new Webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        }),
        new WebpackNotifierPlugin()
    ]
};