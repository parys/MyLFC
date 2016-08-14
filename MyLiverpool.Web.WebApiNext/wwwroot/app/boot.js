"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_constants_1 = require('./app.constants');
var app_routes_1 = require('./app.routes');
var app_1 = require("./app");
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    app_constants_1.Configuration
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=boot.js.map