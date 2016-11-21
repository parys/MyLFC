var IsDevBuild = process.argv.indexOf("--env.prod") < 0;
var Path = require("path");
var Webpack = require("webpack");
var NodeExternals = require("webpack-node-externals");
var Merge = require("webpack-merge");
var AllFilenamesExceptJavaScript = /\.(?!js(\?|$))([^.]+(\?|$))/;
var WebpackNotifierPlugin = require("webpack-notifier");

// Configuration in common to both client-side and server-side bundles
var SharedConfig = {
    context: __dirname,
    resolve: { extensions: [".js", ".ts"] },
    output: {
        filename: "[name].js",
        publicPath: "/js" // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: /angular2app/, loaders: ["ts?silent=true", "angular2-template"] },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: "to-string!css" },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url", query: { limit: 25000 } }
        ]
    }
};

// Configuration for client-side bundle suitable for running in browsers
var ClientBundleOutputDir = "./wwwroot/js";
var ClientBundleConfig = Merge(SharedConfig, {
    entry: { 'main-client': "./angular2/boot-client.ts" },
    output: { path: Path.join(__dirname, ClientBundleOutputDir) },
    plugins: [
        new Webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./wwwroot/js/vendor-manifest.json")
        })
    ].concat(IsDevBuild ? [
        // Plugins that apply in development builds only
        new Webpack.SourceMapDevToolPlugin({
            filename: "[file].map", // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: Path.relative(ClientBundleOutputDir, "[resourcePath]") // Point sourcemap entries to the original file locations on disk
        })
    ] : [
        // Plugins that apply in production builds only
        new Webpack.optimize.OccurrenceOrderPlugin(),
        new Webpack.optimize.UglifyJsPlugin(),
        new WebpackNotifierPlugin()
    ])
});

// Configuration for server-side (prerendering) bundle suitable for running in Node
var ServerBundleConfig = Merge(SharedConfig, {
    entry: { 'main-server': "./angular2app/boot-server.ts" },
    output: {
        libraryTarget: "commonjs",
        path: Path.join(__dirname, "./angular2app/js")
    },
    target: "node",
    devtool: "inline-source-map",
    externals: [NodeExternals({ whitelist: [AllFilenamesExceptJavaScript] })] // Don't bundle .js files from node_modules
});

module.exports = [ClientBundleConfig, ServerBundleConfig];
