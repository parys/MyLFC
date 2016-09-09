"use strict";
class LocalStorageMine {
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
exports.LocalStorageMine = LocalStorageMine;
//# sourceMappingURL=localStorage.js.map