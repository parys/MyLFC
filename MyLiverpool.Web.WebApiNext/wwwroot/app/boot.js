"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const http_1 = require('@angular/http');
const app_constants_1 = require('./app.constants');
const app_routes_1 = require('./app.routes');
const app_1 = require("./app");
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    app_constants_1.Configuration
]).catch(err => console.error(err));
//# sourceMappingURL=boot.js.map