import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import sass from 'rollup-plugin-sass';

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
        sass({
            output: 'bundle.css'
        }),
        nodeResolve({ jsnext: true, module: true }),
        commonjs(
            {
                include: ["node_modules/rxjs/**",
                    "node_modules/angular2-recaptcha/**"
                ]
            }),
        uglify()
    ]
};