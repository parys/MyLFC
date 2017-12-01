const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCss = new ExtractTextPlugin("vendor.css");
const WebpackNotifierPlugin = require("webpack-notifier");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const treeShakableModules = [
    "@angular/animations",
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
  "@angular/forms",
  "@angular/material",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/platform-server",
    "@angular/router",
    "zone.js",
];

const nonTreeShakableModules = [
    "core-js",
  // "es6-shim",
    "bootstrap/dist/css/bootstrap.min.css",
    "@angular/material/prebuilt-themes/indigo-pink.css",
    "event-source-polyfill",
    "ngx-pagination",
    //  "ng2-page-scroll",
];
const allModules = treeShakableModules.concat(nonTreeShakableModules);

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    const sharedConfig = {
        stats: { modules: false },
        resolve: {
            extensions: [".js"]
        },
        module: {
            rules: [
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
                    use: "url-loader?limit=100000"
                },
                {
                    test: /\.json$/,
                    loader: require.resolve("json-loader")
                }
            ]
        },
        output: {
            publicPath: "src/",
            filename: "[name].js",
            library: "[name]_[hash]"
        },
      plugins: [

            //  new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, path.join(__dirname, "./angular2app")), // Workaround for https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, "./angular2app")), // Workaround for https://github.com/angular/angular/issues/14898
            new webpack.IgnorePlugin(/^vertx$/), // Workaround for https://github.com/stefanpenner/es6-promise/issues/100
        ]
    };

  const clientBundleConfig = merge(sharedConfig,
    {
      entry: {
        vendor: isDevBuild ? allModules : nonTreeShakableModules
      },
      output: { path: path.join(__dirname, "wwwroot", "src") },
      module: {
        rules: [
          { test: /\.css(\?|$)/, use: extractCss.extract({ use: isDevBuild ? "css-loader" : "css-loader?minimize" }) }
        ]
      },
      plugins: [
          extractCss,
          new webpack.DllPlugin({
            path: path.join(__dirname, "wwwroot", "src", "[name]-manifest.json"),
            name: "[name]_[hash]"
          }),
          new CopyWebpackPlugin([
            //   { from: "node_modules/tinymce/skins/", to: "../src/" },
            //  { from: "node_modules/tinymce/plugins/", to: "../src/plugins/" },
            //    { from: "node_modules/tinymce/themes/", to: "../src/themes/" }
          ])
        ]
        .concat(isDevBuild
          ? [
            new WebpackNotifierPlugin({ title: "vendorBuild-client", alwaysNotify: true }),
            new CopyWebpackPlugin([//{ from: "node_modules/swagger-ui/dist", to: "../swagger/" },
            ])
          ]
          : [
            new WebpackNotifierPlugin({ title: "vendorBuild-client-PROD", alwaysNotify: true }),
            new BundleAnalyzerPlugin(),
            new webpack.optimize.UglifyJsPlugin()
          ])
    });

    const serverBundleConfig = merge(sharedConfig, {
        target: "node",
        resolve: { mainFields: ["main"] },
        entry: { vendor: allModules.concat(["aspnet-prerendering"]) },
        output: {
            path: path.join(__dirname, "angular2app", "dist"),
            libraryTarget: "commonjs2"
        },
        module: {
            rules: [{ test: /\.css(\?|$)/, use: ["to-string-loader", isDevBuild ? "css-loader" : "css-loader?minimize"] }]
        },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname, "angular2app", "dist", "[name]-manifest.json"),
                name: "[name]_[hash]"
            }),
            new WebpackNotifierPlugin({ title: "vendorBuild-server", alwaysNotify: true })
        ]
    });

    return [clientBundleConfig, serverBundleConfig];
}