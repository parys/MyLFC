/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
/// <binding BeforeBuild='get:started' />

var gulp = require('gulp');
var runSeq = require('run-sequence');
var del = require('del');

var buildConfig = require('./gulp.config');


gulp.task('default', function () {
    // place code for your default task here
});

//var paths = {};
//paths.webroot = "wwwroot/";
//paths.npmSrc = "./node_modules/";
//paths.npmLibs = paths.webroot + "lib/npmlibs/";

//gulp.task("copy-deps:systemjs", function () {
//    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
//         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
//});

//gulp.task("copy-deps:angular2", function () {
//    return gulp.src(paths.npmSrc + '/angular2/bundles/**/*.js', { base: paths.npmSrc + '/angular2/bundles/' })
//         .pipe(gulp.dest(paths.npmLibs + '/angular2/'));
//});

//gulp.task("copy-deps:es6-shim", function () {
//    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
//         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));

//});
//gulp.task("copy-deps:es6-promise", function () {
//    return gulp.src(paths.npmSrc + '/es6-promise/dist/**/*.*', { base: paths.npmSrc + '/es6-promise/dist/' })
//         .pipe(gulp.dest(paths.npmLibs + '/es6-promise/'));
//});

//gulp.task("copy-deps:rxjs", function () {
//    return gulp.src(paths.npmSrc + '/rxjs/bundles/*.*', { base: paths.npmSrc + '/rxjs/bundles/' })
//         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
//});

//gulp.task("copy-deps", ["copy-deps:rxjs", 'copy-deps:angular2', 'copy-deps:systemjs', 'copy-deps:es6-shim', 'copy-deps:es6-promise']);


gulp.task('get:started', function (done) {
    runSeq(
        'clean-Vendor-Js-In-Root',
        'copy-Vendor-Js-To-Wwwroot-Internal',
        done);
});

gulp.task('clean-Vendor-Js-In-Root', function () {
    return del(buildConfig.rootJsFolder);
});

gulp.task('copy-Vendor-Js-To-Wwwroot-Internal', function (done) {
    runSeq(
          'copy-angular',
          'copy-rxjs',
          'copy-allOther',
          done);
});

gulp.task('copy-angular', function () {
    return gulp.src(buildConfig.sources.angularRC)
        .pipe(gulp.dest(buildConfig.rootJsFolder + "@angular/"));
});

gulp.task('copy-rxjs', function () {
    return gulp.src(buildConfig.sources.Rxjs)
        .pipe(gulp.dest(buildConfig.rootJsFolder + "rxjs/"));
});

gulp.task('copy-allOther', function () {
    return gulp.src(buildConfig.sources.jsFilesInclSourcePaths)
        .pipe(gulp.dest(buildConfig.rootJsFolder));
});

gulp.task('copy-fonts', function() {
    return gulp.src(buildConfig.sources.fonts)
        .pipe(gulp.dest(buildConfig.rootFontsFolder));
});

gulp.task('copy-css', function() {
    return gulp.src(buildConfig.sources.bootstrapPath)
        .pipe(gulp.dest(buildConfig.rootCssFolder));
});