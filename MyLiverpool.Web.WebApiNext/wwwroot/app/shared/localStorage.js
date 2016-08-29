"use strict";
const core_1 = require('@angular/core');
class LocalStorage {
    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }
    set(key, value) {
        this.localStorage[key] = value;
    }
    get(key) {
        return this.localStorage[key] || false;
    }
    setObject(key, value) {
        this.localStorage[key] = JSON.stringify(value);
    }
    getObject(key) {
        return JSON.parse(this.localStorage[key] || '{}');
    }
    remove(key) {
        this.localStorage.removeItem(key);
    }
}
exports.LocalStorage = LocalStorage;
exports.LOCAL_STORAGE_PROVIDERS = [
    core_1.provide(LocalStorage, { useClass: LocalStorage })
];
//# sourceMappingURL=localStorage.js.map