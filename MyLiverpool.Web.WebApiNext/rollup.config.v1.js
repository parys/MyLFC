import resolve from "rollup-plugin-node-resolve-with-alias";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import sass from 'rollup-plugin-sass';
const path = require("path");

export default {
    entry: "temp-js/dist/unbundled-aot/angular2app/main.browser.aot.js",
    dest: "wwwroot/src/build.js", // output a single application bundle
    sourceMap: false,
    treeshake: true,
    format: "iife",
    onwarn: function(warning) {
        // Skip certain warnings

        // should intercept ... but doesn't in some rollup versions
        if (warning.code === "THIS_IS_UNDEFINED") {
            return;
        }

        // console.warn everything else
        console.warn(warning.message);
    },
    plugins: [
        sass({
            output: 'bundle.css'
        }),
        resolve({
            jsnext: true,
            module: true,
            alias: {
                '@app': path.join(__dirname, "temp-js/dist/unbundled-aot/angular2app/app"),
                // 'rxjs': rxPaths()
            } }),
        commonjs(
            {
                include: ["node_modules/rxjs/**",
                    "node_modules/angular2-recaptcha/**"
                ]
            }),
       // uglify()
    ]
};