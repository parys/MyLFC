export class LocalStorageMine {
    private localStorage: any;

    constructor() {
        if (!localStorage) {
            throw new Error("Current browser does not support Local Storage");
        }
        this.localStorage = localStorage;
    }

    set(key: string, value: string): void {
        this.localStorage[key] = value;
    }

    get(key: string): string {
        return this.localStorage[key] || false;
    }

    setObject(key: string, value: any): void {
        this.localStorage[key] = JSON.stringify(value);
    }

    getObject(key: string): any {
        if (this.localStorage[key]) {
            return JSON.parse(this.localStorage[key]);
        }
        return null;
    }

    remove(key: string): any {
        this.localStorage.removeItem(key);
    }
}