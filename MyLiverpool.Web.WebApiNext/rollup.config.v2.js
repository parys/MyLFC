import angular from 'rollup-plugin-angular-aot';
import typescript from 'rollup-plugin-typescript2';
import resolve from "rollup-plugin-node-resolve-with-alias";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import sass from 'node-sass';
import CleanCSS from 'clean-css';
import { minify as minifyHtml } from 'html-minifier';
const path = require("path");
//import sass from 'rollup-plugin-sass';

const cssmin = new CleanCSS();
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
};



export default {
    entry: "angular2app/main.browser.aot.ts",
  //  entry: "temp-js/dist/unbundled-aot/angular2app/main.aot.js",
    dest: "wwwroot/src/build.js", // output a single application bundle
    sourceMap: false,
   // treeshake: true,
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
     //   sass({output: true}),
        commonjs(
            {
                include: ["node_modules/rxjs/**",
                    "node_modules/angular2-recaptcha/**"
                ]
            }),
          angular({
               preprocessors: {
                   template: template => minifyHtml(template, htmlminOpts),
                   style: scss => {
                       const css = sass.renderSync({ data: scss }).css;
                       return cssmin.minify(css).styles;
                   }
               }
           }),
           typescript({
            //   check: false,
           //    clean: true,
               tsconfig: "tsconfig.aot.json",
               verbosity: 3,
          //     abortOnError: false,
            //   rollupCommonJSResolveHack: true
 
           }),
        resolve({
            jsnext: true,
            module: true,
            alias: {
                '@app': path.join(__dirname, "temp-js/dist/unbundled-aot/angular2app/app"),
                // 'rxjs': rxPaths()
            }
        }),

       // uglify()
    ]
};