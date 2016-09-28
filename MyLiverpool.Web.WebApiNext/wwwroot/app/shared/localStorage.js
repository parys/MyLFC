"use strict";
var LocalStorageMine = (function () {
    function LocalStorageMine() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }
    LocalStorageMine.prototype.set = function (key, value) {
        this.localStorage[key] = value;
    };
    LocalStorageMine.prototype.get = function (key) {
        return this.localStorage[key] || false;
    };
    LocalStorageMine.prototype.setObject = function (key, value) {
        this.localStorage[key] = JSON.stringify(value);
    };
    LocalStorageMine.prototype.getObject = function (key) {
        return JSON.parse(this.localStorage[key] || '{}');
    };
    LocalStorageMine.prototype.remove = function (key) {
        this.localStorage.removeItem(key);
    };
    return LocalStorageMine;
}());
exports.LocalStorageMine = LocalStorageMine;
//# sourceMappingURL=localStorage.js.map