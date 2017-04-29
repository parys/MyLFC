//import rollup from "rollup"
//import nodeResolve from "rollup-plugin-node-resolve"
//import commonjs from "rollup-plugin-commonjs";
//import uglify from "rollup-plugin-uglify"

//export default {
//    entry: "angular2app/boot-client.js",
//    dest: "wwwroot/src/build.js", // output a single application bundle
//    sourceMap: false,
//    format: "iife",
//    onwarn: function(warning) {
//        // Skip certain warnings

//        // should intercept ... but doesn't in some rollup versions
//        if (warning.code === "THIS_IS_UNDEFINED") {
//            return;
//        }

//        // console.warn everything else
//        console.warn(warning.message);
//    },
//    plugins: [
//        nodeResolve({ jsnext: true, module: true }),
//        commonjs(
//            {
//                include: "node_modules/ng2-auto-complete/**"
//            }, {
//                include: "node_modules/rxjs/**"
//            }),
//        uglify()
//    ]
//}