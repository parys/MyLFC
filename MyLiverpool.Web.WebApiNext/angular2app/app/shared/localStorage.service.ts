import { Injectable } from "@angular/core";           

@Injectable()
export class LocalStorageService { 

    constructor() {
        if (!localStorage) {
            throw new Error("Current browser does not support Local Storage");
        }
    }

    hasAccessToken(): boolean {
        return this.get("access_token") !== null;
    }

    getAccessTokenWithType(): string {                                         
        return `${this.get("token_type")} ${this.get("access_token")}`;
    }

    getRoles(): string[] {
        return this.getObject("roles");
    }

    getUserId(): number {
        return +this.get("userId");
    }

    removeRoles(): void {
        this.remove("roles");
    }

    removeAuthTokens(): void {
        this.remove("token_type");
        this.remove("access_token");
        this.remove("expires_in");
        this.remove("refresh_token");
        this.remove("roles");
        this.remove("userId");
    }

    setAuthTokens(item: any): boolean {    //todo set type here and below
        let response = JSON.parse(item._body);
        this.set("token_type", response.token_type);
        this.set("access_token", response.access_token);
        this.set("expires_in", response.expires_in);
        this.set("refresh_token", response.refresh_token);
        return true;
    }

    setRoles(roles: string[]): void {
        this.setObject("roles", roles);
    }

    setUserId(id: string): void {
        this.setObject("userId", id);
    }

    tryAddViewForNews(id: number): boolean {
        if (!this.get(`material${id}`)) {
            this.set(`material${id}`, "1");
            return true;
        }
        return false;
    }

    private set(key: string, value: string): void {
        localStorage[key] = value;
    }

    private get(key: string): string {
        return localStorage[key] || false;
    }

    private setObject(key: string, value: any): void {
        localStorage[key] = JSON.stringify(value);
    }

    private getObject(key: string): any {
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        }
        return null;
    }

    private remove(key: string): any {
        localStorage.removeItem(key);
    }
}