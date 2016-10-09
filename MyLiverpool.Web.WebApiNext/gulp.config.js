"use strict";

module.exports = {
    rootJsFolder: "./wwwroot/js/",
    rootCssFolder: "./wwwroot/css/",
    rootFontsFolder: "./wwwroot/fonts/",
    sources: {
        jsFilesInclSourcePaths: [
            "node_modules/core-js/client/shim.min.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/reflect-metadata/Reflect.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/jquery/dist/jquery.js",
            "node_modules/bootstrap/dist/js/bootstrap.js",
            "node_modules/ng2-translate/bundles/ng2-translate.js",
            "node_modules/ng2-auto-complete/dist/ng2-auto-complete.umd.js",
            "node_modules/ng2-pagination/dist/ng2-pagination-bundle.js"
        ],

        angularRC: "node_modules/@angular/**/*.js",
        Rxjs: "node_modules/rxjs/**/*.js",
        fonts: "node_modules/bootstrap/fonts/*.{ttf,woff,eot,svg,woff2}",
        bootstrapPath: "node_modules/bootstrap/dist/css/*.{css,map}"
    }
};