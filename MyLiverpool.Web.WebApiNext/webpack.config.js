const path = require("path");
const webpack = require("webpack");
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
//const rxPaths = require("rxjs/_esm5/path-mapping");
//var NodeExternals = require("webpack-node-externals");
var Merge = require("webpack-merge");
//var AllFilenamesExceptJavaScript = /\.(?!js(\?|$))([^.]+(\?|$))/;
var WebpackNotifierPlugin = require("webpack-notifier");
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function srcPath(subdir) {
    return path.join(__dirname, "angular2app", subdir);
}

module.exports = (env) => {
    // Configuration in common to both client-side and server-side bundles
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        stats: { modules: false },
        context: __dirname,
        resolve: {
            extensions: [".js", ".ts"],
            alias: {
                '@app': srcPath("app")
             //   rxPaths()
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
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
                use: "url-loader?limit=100000"
              },
              {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                include: /angular2app/,
                use: isDevBuild
                  ? ["awesome-typescript-loader?silent=true", "angular2-template-loader", "angular-router-loader"]
                  : "@ngtools/webpack"
              },
                { test: /\.html$/, use: "html-loader?minimize=false" },
                { test: /\.css$/, use: ['to-string-loader', isDevBuild ? "css-loader" : "css-loader?minimize"] },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: "url-loader?limit=25000" }
            ]
        },
        plugins: [
// Put webpack plugins here if needed, or leave it as an empty array if not
            new CheckerPlugin()
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
                new webpack.optimize.UglifyJsPlugin({
                  compress: {
                    warnings: false,
                    screw_ie8: true,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true
                  },
                  output: {
                    comments: false
                  },
                  sourceMap: true
                }),
                    new AngularCompilerPlugin({
                        tsConfigPath: "./tsconfig.json",
                        entryModule: path.join(__dirname, 'angular2app/app/app.module.browser#AppModule'),
                        exclude: ["./**/*.server.ts"]
                    })
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
            devtool: isDevBuild ? "inline-source-map" : false,
//    externals: [NodeExternals({ whitelist: [AllFilenamesExceptJavaScript] })], // Don't bundle .js files from node_modules
            plugins: [
                new WebpackNotifierPlugin({ title: "serverBuild", alwaysNotify: true }),
                new webpack.DllReferencePlugin({
                    context: __dirname,
                    manifest: require("./angular2app/dist/vendor-manifest.json"),
                    sourceType: "commonjs2",
                    name: "./vendor"
                })
            ].concat(isDevBuild ? [] : [
                new webpack.optimize.UglifyJsPlugin({
                    compress: false,
                    mangle: false
                }),
                // Plugins that apply in production builds only
                new AngularCompilerPlugin({
                    tsConfigPath: './tsconfig.json',
                  entryModule: path.join(__dirname, 'angular2app/app/app.module.server#AppModule'),
                    exclude: ['./**/*.browser.ts']
                })
            ]),
        });
   // return [clientBundleConfig, serverBundleConfig];
    return [clientBundleConfig];
};