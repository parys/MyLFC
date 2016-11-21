"use strict";
require("angular2-universal-polyfills/browser");
var angular2_universal_1 = require("angular2-universal");
var core_1 = require("@angular/core");
var app_module_1 = require("./app/app.module");
require("bootstrap");
if (module["hot"]) {
    module["hot"].accept();
    module["hot"].dispose(function () { platform.destroy(); });
}
else {
    core_1.enableProdMode();
}
var platform = angular2_universal_1.platformUniversalDynamic();
var bootApplication = function () { platform.bootstrapModule(app_module_1.AppModule); };
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}
//# sourceMappingURL=boot-client.js.map