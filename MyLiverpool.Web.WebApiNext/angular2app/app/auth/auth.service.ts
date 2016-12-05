import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router"; 
import { RolesCheckedService, HttpWrapper, LocalStorageService } from "../shared/index"; 
import { Configuration } from "../app.constants";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    roles: string[] = [];
    id: number;

    constructor(private http: HttpWrapper, private http1: Http, private localStorage: LocalStorageService,
        private rolesCheckedService: RolesCheckedService, private router: Router, private configuration: Configuration) {  
        if (localStorage.hasAccessToken()) { 
            this.isLoggedIn = true;                              
            this.roles = localStorage.getRoles();
            this.id = localStorage.getUserId();
        } else {
            localStorage.removeRoles();
        }
    }
                                                         
    redirectUrl: string;

    login(username: string, password: string): boolean {
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8;");
        let perams = `grant_type=password&username=${username}&password=${password}&client_id=client_id3`;

        this.http1.post(this.configuration.Server + "connect/token",
                perams,
                {
                    headers: headers
                })
            .subscribe(data => this.parseLoginAnswer(data),
                error => {
                    if (error._body === "unconfirmed_email") {
                        this.router.navigate(["/unconfirmedEmail"]);
                        return;
                    }
                    console.log(error);
                },
                () => this.getUserId());
        return true;
    }      

    logout(): void {
        this.localStorage.removeAuthTokens();
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
        if (this.localStorage.setAuthTokens(item)) {
            this.isLoggedIn = true;
        }
    }

    private parseRoles(item: any): void { 
        this.roles = item._body.split(", ");
        this.localStorage.setRoles(this.roles);
    }

    private getRoles(): void {
        this.http.get(this.configuration.ServerWithApiUrl + "role")
            .subscribe(data => this.parseRoles(data),
            error => console.log(error),
            () => this.rolesCheckedService.checkRoles());
    }

    private getUserId(): void {
        this.http.get(this.configuration.ServerWithApiUrl + "user/getId")
            .subscribe(data => this.id = +JSON.parse(data.text()),
            error => console.log(error),
            () => {
                this.localStorage.setUserId(this.id);
                this.getRoles();
            });
    }
}