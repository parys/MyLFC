import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import sass from "rollup-plugin-sass";
const path = require("path");
import resolve from "rollup-plugin-node-resolve-with-alias";

export default {
    input: "temp-js/dist/unbundled-aot/angular2app/main.browser.aot.js",
    output: {
        file: "wwwroot/src/build.js",
        format: "iife"
    }, // output a single application bundle
    sourceMap: false,
    treeshake: true,
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
        resolve({
            module: true, // Default: true 

            // use "jsnext:main" if possible 
            // – see https://github.com/rollup/rollup/wiki/jsnext:main 
            jsnext: true,  // Default: false 

            // use "main" field or index.js, even if it's not an ES6 module 
            // (needs to be converted from CommonJS to ES6 
            // – see https://github.com/rollup/rollup-plugin-commonjs 
            main: true,  // Default: true 

            // some package.json files have a `browser` field which 
            // specifies alternative files to load for people bundling 
            // for the browser. If that's you, use this option, otherwise 
            // pkg.browser will be ignored 
            browser: true,  // Default: false 
            //     resolve: ["/index.js", ".js"],
            alias: {
             '@app': path.join(__dirname, "temp-js/dist/unbundled-aot/angular2app/app")
        }
        }),
        sass({
            output: "bundle.css"
        }),
        commonjs(
            {
                include: ["node_modules/rxjs/**",
                    "node_modules/angular2-recaptcha/**"
                ]
            }),
        uglify()
    ]
};