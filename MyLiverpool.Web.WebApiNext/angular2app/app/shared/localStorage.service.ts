import { Injectable, Inject } from "@angular/core";
import { LocalStorage } from "./local-storage"; 

@Injectable()
export class LocalStorageService {
 //   private localStorage: Storage;

    constructor(
        @Inject(LocalStorage) private localStorage: any) {
    }

    public getAuthTokens(): string {
        return this.get("auth-tokens");
    }

    public hasAccessToken(): boolean {
        return this.get("access_token") !== null;
    }

    public getAccessToken(): string {
        return this.get("access_token");
    }

    public getRefreshToken(): string {
        return this.get("refresh_token");
    }

    public getAccessTokenWithType(): string {                                         
        return `${this.get("token_type")} ${this.get("access_token")}`;
    }

    public getRoles(): string[] {
        return this.getObject("roles");
    }

    public isTokenExpired(): boolean {
        if (!this.get("expires_in")) {
            return false;
        }
        let expiredDate = new Date(this.get("expires_in"));
        return (expiredDate <= new Date());
    } 

    public getUserId(): number {
        return +this.get("userId");
    }

    public removeRoles(): void {
        this.remove("roles");
    }

    public setChatUpdateTime(value: number, type: number = null): void {
        this.set(`chatTimer${type}`, value.toString());
    }

    public getChatUpdateTime(type: number = null): number {
        return +this.get(`chatTimer${type}`);
    }

    public removeAuthTokens(): void {
        this.remove("token_type");
        this.remove("access_token");
        this.remove("expires_in");
        this.remove("refresh_token");
        this.remove("roles");
        this.remove("userId");
        this.remove("auth-tokens");
    }

    public setAuthTokens(item: any): boolean {
        this.set("auth-tokens", JSON.stringify(item));
        //let response = JSON.parse(item._body);
        //this.set("token_type", response.token_type);
        //this.set("access_token", response.access_token);
        //this.set("expires_in", this.setExpiredDate(response.expires_in));
        //this.set("refresh_token", response.refresh_token);
        return true;
    }

    private setExpiredDate(seconds : number) : string {
        let date = new Date();
        date.setSeconds(date.getSeconds() + seconds);
        return date.toUTCString();
    };

    public setRoles(roles: string[]): void {
        if (!this.localStorage) return;
        this.setObject("roles", roles);
    }

    public setUserId(id: number): void {
        if (!this.localStorage) return;
        this.setObject("userId", id);
    }

    public tryAddViewForMaterial(id: number): boolean {
        if (!this.localStorage) return false;
        if (!this.get(`material${id}`)) {
            this.set(`material${id}`, "1");
            return true;
        }
        return false;
    }

    public removeAllData(): void {
        this.removeAuthTokens();
        this.removeRoles();
    }

    private set(key: string, value: string): void {
        if (!this.localStorage) return;
        localStorage[key] = value;
    }

    private get(key: string): string {
        if (!this.localStorage) return "";
        return localStorage[key] || false;
    }

    private setObject(key: string, value: any): void {
        if (!this.localStorage) return;
        localStorage[key] = JSON.stringify(value);
    }

    private getObject(key: string): any {
        if (!this.localStorage) return null;
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        }
        return null;
    }

    private remove(key: string): any {
        if (!this.localStorage) return null;
        this.localStorage.removeItem(key);
    }
}