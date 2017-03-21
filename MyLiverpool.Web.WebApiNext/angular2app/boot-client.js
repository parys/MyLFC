"use strict";
require("./polyfills");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app/app.module");
require("bootstrap");
if (module["hot"]) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        platform.destroy();
        document.body.appendChild(document.createElement("app"));
    });
}
else {
    core_1.enableProdMode();
}
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
var bootApplication = function () { platform.bootstrapModule(app_module_1.AppModule); };
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}
//# sourceMappingURL=boot-client.js.map