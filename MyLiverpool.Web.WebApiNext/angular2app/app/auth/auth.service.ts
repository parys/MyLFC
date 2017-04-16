import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RolesCheckedService, HttpWrapper, LocalStorageService } from "../shared/index";

@Injectable()
export class AuthService {
    roles: string[] = [];
    id: number;

    constructor(private http: HttpWrapper,
        private localStorage: LocalStorageService,
        private rolesCheckedService: RolesCheckedService,
        private router: Router) {
        this.updateAuthTokens();
    }

    login(username: string, password: string): boolean {
        this.http.login(username, password).subscribe(data => this.parseLoginAnswer(data),
            error => {
                if (error._body === "unconfirmed_email") {
                    this.router.navigate(["/unconfirmedEmail"]);
                    return;
                }
                console.log("requestForToken");
                this.localStorage.removeAllData();
            },
            () => {
                this.getUserId();
            });

        return true;
    }

    logout(): void {
        this.localStorage.removeAuthTokens();
        this.rolesCheckedService.checkRoles();
    }

    isUserInRole(role: string): boolean {
        if (this.roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }

    private updateAuthTokens(): void {
        let refreshToken = this.localStorage.getRefreshToken();
        if (!refreshToken) {
            return;
        }
        let result = true;
        this.http.refreshTokens().subscribe(data => data,
            error => {
                if (JSON.parse(error._body)["error"] === "invalid_grant") {
                    result = false;
                    this.localStorage.removeAllData();
                }
            },
            () => {
                if (result) {
                    this.roles = this.localStorage.getRoles();
                    this.id = this.localStorage.getUserId();
                }
            });
    }

    private parseLoginAnswer(item: any): void {
        this.localStorage.setAuthTokens(item);
    }

    private parseRoles(item: any): void {
        this.roles = item._body.split(", ");
        this.localStorage.setRoles(this.roles);
    }

    private getRoles(): void {
        this.http.get("role")//bug make list request form service
            .subscribe(data => this.parseRoles(data),
                error => console.log(error),
                () => this.rolesCheckedService.checkRoles());
    }

    private getUserId(): void {
        this.http.get("user/getId")//bug make list request form service
            .subscribe(data => this.id = +JSON.parse(data.text()),
                error => console.log(error),
                () => {
                    this.localStorage.setUserId(this.id);
                    this.getRoles();
                });
    }
}