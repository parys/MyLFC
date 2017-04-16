import { Injectable } from "@angular/core";
import { RolesCheckedService, HttpWrapper, LocalStorageService } from "../shared/index";

@Injectable()
export class AuthService {
    roles: string[] = [];
    id: number;

    constructor(private http: HttpWrapper,
        private localStorage: LocalStorageService,
        private rolesCheckedService: RolesCheckedService) {
        this.roles = this.localStorage.getRoles();
        this.id = this.localStorage.getUserId();
        if (!this.id) {
            if (http.checkTokenExpirationDate()) {
                this.getUserId();
            }
        }
    }

  //  redirectUrl: string;

    login(username: string, password: string): boolean {
        if (this.http.login(username, password)) {
            this.getUserId();
        }

        return true;
    }

    logout(): void {
        this.localStorage.removeAuthTokens();
      //  this.isLoggedIn = false;
        this.rolesCheckedService.checkRoles();
    }

    isUserInRole(role: string): boolean {
        if (this.roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }
    private parseRoles(item: any): void {
        this.roles = item._body.split(", ");
        this.localStorage.setRoles(this.roles);
    }

    private getRoles(): void {
        this.http.get("role")
            .subscribe(data => this.parseRoles(data),
                error => console.log(error),
                () => this.rolesCheckedService.checkRoles());
    }
    private getUserId(): void {
        this.http.get("user/getId")
            .subscribe(data => this.id = +JSON.parse(data.text()),
                error => console.log(error),
                () => {
                    this.localStorage.setUserId(this.id);
                    this.getRoles();
                });
    }
}