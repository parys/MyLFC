import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";
import { LocalStorageMine, RolesCheckedService, HttpWrapper } from "../shared/index";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    roles: string[] = [];
    id: number;

    constructor(private http: HttpWrapper, private http1: Http, private localStorage: LocalStorageMine,
        private rolesCheckedService: RolesCheckedService, private router: Router) {  
        if (this.localStorage.get("access_token")) { 
            this.isLoggedIn = true;                              
            this.roles = this.localStorage.getObject("roles");
            this.id = +this.localStorage.get("userId");
        } else {
            this.localStorage.remove("roles");
        }
    }
                                                         
    redirectUrl: string;

    login(username: string, password: string): boolean {
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        let perams = `grant_type=password&username=${username}&password=${password}&client_id=client_id3`;

        var result = this.http1.post("connect/token", perams, {
            headers: headers
        });
        result.subscribe(data => this.parseLoginAnswer(data),
            error => {
                if(error._body === "unconfirmed_email") {
                    this.router.navigate(["/unconfirmedEmail"]);
                    return;
                }
                console.log(error);
            },
            () => this.getUserId());
        return true;
    }      

    logout(): void {
        this.localStorage.remove("token_type");
        this.localStorage.remove("access_token");
        this.localStorage.remove("expires_in");
        this.localStorage.remove("refresh_token");
        this.localStorage.remove("roles");
        this.localStorage.remove("userId");
        this.isLoggedIn = false;
        this.rolesCheckedService.checkRoles();
    }

    isUserInRole(role: string): boolean {
        if (this.roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }

    private parseLoginAnswer(item: any): void {
        let response = JSON.parse(item._body); // todo migrate to es6 storage
        this.localStorage.setObject("token_type", response.token_type);
        this.localStorage.setObject("access_token", response.access_token);
        this.localStorage.setObject("expires_in", response.expires_in);
        this.localStorage.setObject("refresh_token", response.refresh_token);
        this.isLoggedIn = true;
    }

    private parseRoles(item: any): void {
        this.roles = item._body.split(", ");
        this.localStorage.setObject("roles", this.roles);
    }

    private getRoles(): void {
        this.http.get("api/role")
            .subscribe(data => this.parseRoles(data),
            error => console.log(error),
            () => this.rolesCheckedService.checkRoles());
    }

    private getUserId(): void {
        this.http.get("api/user/getId")
            .subscribe(data => this.id = +JSON.parse(data.text()),
            error => console.log(error),
            () => {
                this.localStorage.set("userId", this.id.toString());
                this.getRoles();
            });
    }
}