"use strict";
require("./__2.1.1.workaround.ts");
require("angular2-universal-polyfills/node");
require("zone.js");
var core_1 = require("@angular/core");
var angular2_universal_1 = require("angular2-universal");
var app_module_1 = require("./app/app.module");
core_1.enableProdMode();
var platform = angular2_universal_1.platformNodeDynamic();
function default_1(params) {
    var doc = "\n        <!DOCTYPE html>\n\n        <html>\n            <head></head>\n            <body>\n                <my-app></my-app>\n            </body>\n        </html>\n    ";
    return new Promise(function (resolve, reject) {
        var requestZone = Zone.current.fork({
            name: "angular-universal request",
            properties: {
                baseUrl: "/",
                requestUrl: params.url,
                originUrl: params.origin,
                preboot: false,
                document: doc
            },
            onHandleError: function (parentZone, currentZone, targetZone, error) {
                reject(error);
                return true;
            }
        });
        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
            resolve({ html: html });
        }, reject);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=boot-server.js.map