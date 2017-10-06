const path = require("path");
const webpack = require("webpack");
//var NodeExternals = require("webpack-node-externals");
var Merge = require("webpack-merge");
//var AllFilenamesExceptJavaScript = /\.(?!js(\?|$))([^.]+(\?|$))/;
var WebpackNotifierPlugin = require("webpack-notifier");

function srcPath(subdir) {
    return path.join(__dirname, "angular2app", subdir);
}

module.exports = (env) => {
    // Configuration in common to both client-side and server-side bundles
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        context: __dirname,
        resolve: {
            extensions: [".js", ".ts"],
            alias: {
                '@app': srcPath("app"),
            }
        },
        output: {
            filename: "[name].js",
            publicPath: "src/" // webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loaders: ["raw-loader", "resolve-url-loader", "sass-loader"]
                },
                {
                    test: /\.ts$/,
                    include: /angular2app/,
                    use: ["awesome-typescript-loader", "angular2-template-loader"]
                },
                { test: /\.html$/, use: "html-loader" },
                // bug  { test: /\.css$/, loader: "style-loader!css-loader" },
                { test: /\.css$/, use: "raw-loader" },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: "url-loader?limit=25000" }
            ]
        },
        plugins: [
// Put webpack plugins here if needed, or leave it as an empty array if not
        ]
    };

// Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = "./wwwroot/src/";
    const clientBundleConfig = Merge(sharedConfig,
        {
            entry: { 'main-client': "./angular2app/main.browser.ts" },
            output: { path: path.join(__dirname, clientBundleOutputDir) },
            plugins: [
                new webpack.DllReferencePlugin({
                    context: __dirname,
                    manifest: require("./wwwroot/src/vendor-manifest.json")
                })
            ].concat(isDevBuild
                ? [
                    // Plugins that apply in development builds only
                    new webpack.SourceMapDevToolPlugin({
                        filename: "[file].map", // Remove this line if you prefer inline source maps
                        moduleFilenameTemplate:
                            path.relative(clientBundleOutputDir,
                                "[resourcePath]") // Point sourcemap entries to the original file locations on disk
                    }),
                    new WebpackNotifierPlugin({ title: "clientBuild", alwaysNotify: true })
                ]
                : [
                    // Plugins that apply in production builds only
                    new webpack.optimize.UglifyJsPlugin()
                ])
        });

// Configuration for server-side (prerendering) bundle suitable for running in Node
    const serverBundleConfig = Merge(sharedConfig,
        {
            target: "node",
            resolve: { mainFields: ["main"] },
            entry: { 'main-server': "./angular2app/main.server.ts" },
            output: {
                libraryTarget: "commonjs",
                path: path.join(__dirname, "./angular2app/dist")
            },
            devtool: "inline-source-map",
//    externals: [NodeExternals({ whitelist: [AllFilenamesExceptJavaScript] })], // Don't bundle .js files from node_modules
            plugins: [
                new WebpackNotifierPlugin({ title: "serverBuild", alwaysNotify: true }),
                new webpack.DllReferencePlugin({
                    context: __dirname,
                    manifest: require("./angular2app/dist/vendor-manifest.json"),
                    sourceType: "commonjs2",
                    name: "./vendor"
                })
            ]
        });
    return [clientBundleConfig];//, serverBundleConfig];
};