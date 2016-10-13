/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': "app",
        '@angular': "js/@angular",
        'rxjs': "js/rxjs",
        'ng2-auto-complete': "js",
        'moment': "js/moment.js",
        'ng2-bootstrap/ng2-bootstrap': "js/ng2-bootstrap/bundles"
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: "boot.js", defaultExtension: "js" },
        'rxjs': { defaultExtension: "js" },

         // angular bundles
      '@angular/core': "npm:@angular/core/bundles/core.umd.js",
      '@angular/common': "npm:@angular/common/bundles/common.umd.js",
      '@angular/compiler': "npm:@angular/compiler/bundles/compiler.umd.js",
      '@angular/platform-browser': "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
      '@angular/platform-browser-dynamic': "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
      '@angular/http': "npm:@angular/http/bundles/http.umd.js",
      '@angular/router': "npm:@angular/router/bundles/router.umd.js",
      '@angular/forms': "npm:@angular/forms/bundles/forms.umd.js",
      '@angular/material': {
            format: "cjs",
            main: "material.umd.js"
        },

      'ng2-auto-complete': { main: "ng2-auto-complete.umd.js", defaultExtension: "js" },
      'ng2-bootstrap/ng2-bootstrap': { "main": "ng2-bootstrap.umd.js", "defaultExtension": "js" }
    };
    var ngPackageNames = [
      "common",
      "compiler",
      "core",
      "forms",
      "http",
      "platform-browser",
      "platform-browser-dynamic",
      "router",
      "upgrade"
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages["@angular/" + pkgName] = { main: "index.js", defaultExtension: "js" };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages["@angular/" + pkgName] = { main: "/bundles/" + pkgName + ".umd.js", defaultExtension: "js" };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);