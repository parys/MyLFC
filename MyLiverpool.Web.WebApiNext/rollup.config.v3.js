import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import CleanCSS from 'clean-css';
import sass from 'node-sass';
//import replace from 'rollup-plugin-replace';
//import resolve from 'rollup-plugin-node-resolve-angular';
import cleanup from 'rollup-plugin-cleanup';

//import alias from 'rollup-plugin-alias';
import { minify as minifyHtml } from 'html-minifier';
import resolve from "rollup-plugin-node-resolve-with-alias";
import typescript from 'rollup-plugin-typescript2';
import angular from 'rollup-plugin-angular';
const path = require("path");

const cssmin = new CleanCSS();
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
};


export default {
    entry: "angular2app/main.browser.ts",
    dest: "wwwroot/src/build4.js", // output a single application bundle
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
        angular({
            preprocessors: {
            template: template => minifyHtml(template, htmlminOpts),
            style: scss => {
                const css = sass.renderSync({ data: scss }).css;
                return cssmin.minify(css).styles;
            }
        }}),
        typescript({
            tsconfig: "tsconfig.json",
            verbosity: 1}),
     //   sass({
     //       output: 'bundle.css'
     //   }),
        resolve({
            jsnext: true,
            module: true,
            alias: {
                '@app': path.join(__dirname, "angular2app/app"),
                // 'rxjs': rxPaths()
            }
        }),
        commonjs(
            {
                include: ["node_modules/rxjs/**",
                    "node_modules/angular2-recaptcha/**"
                ]
            }),
      //  cleanup(),
      //  uglify()
    ]
};