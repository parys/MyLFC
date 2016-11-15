var path = require("path");

var Webpack = require("webpack");

var CommonsChunkPlugin = Webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var WebpackNotifierPlugin = require("webpack-notifier");
var Helpers = require("./webpack.helpers");

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
        filename: "js/[name].bundle.js"
    },

    resolve: {
        extensions: [".ts", ".js", ".json", ".css", ".scss", ".html"]
    },

    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                exclude: /node_modules/,
                loader: "file?name=assets/[name]-[hash:6].[ext]"
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({
                         fallbackLoader: "style-loader", 
                         loader: "css-loader"
                    })
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            { test: /bootstrap\/js\//, loader: "imports?jQuery=jquery" },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "postcss", "sass"]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&minetype=image/svg+xml&name=fonts/[name].[ext]"
            }
        ],
        exprContextCritical: false
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
        new CleanWebpackPlugin(
            [
                "./wwwroot/dist",
                "./wwwroot/css/",
                "./wwwroot/fonts",
                "./wwwroot/assets",
                "./wwwroot/index.html"
            ]
        ),
        new CommonsChunkPlugin({
            name: ["vendor", "polyfills"]
        }),
        new HtmlWebpackPlugin({
            inject: "body",
            chunksSortMode: Helpers.packageSort(["polyfills", "vendor", "app"]),
            template: "angular2App/index.html"
        }),
        //new CopyWebpackPlugin([
        //    { from: "./angular2App/content/**/*.*", to: "assets/", flatten: true }
        //]),
        new Webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        }),
        new WebpackNotifierPlugin()
    ]
};