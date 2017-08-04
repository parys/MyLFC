import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
//import sass from 'rollup-plugin-sass';
//import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve-angular';
import cleanup from 'rollup-plugin-cleanup';

export default {
    entry: "temp-js/dist/unbundled-aot/angular2app/main.aot.js",
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
     //   sass({
     //       output: 'bundle.css'
     //   }),
        resolve({
            es2015: true,
            module: true,
            jsnext: true,
            main: true,
            extensions: [ ".js", ".json" ],
            preferBuiltins: false
        }),
        commonjs(
            {
                include: ["node_modules/rxjs/**",
                    "node_modules/ng2-auto-complete/**",
                    "node_modules/angular2-recaptcha/**",
                    "node_modules/@angular/cdk/**"
                ]
            }),
        cleanup(),
        uglify()
    ]
};