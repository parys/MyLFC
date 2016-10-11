import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { RolesCheckedService } from "./shared/roles-checked.service";
import { IRoles } from "./shared/roles.interface";

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html"
})

export class AppComponent {
    roles: IRoles;
    constructor(private router: Router, public auth: AuthService, private rolesChecked: RolesCheckedService) { //todo need to more elegant decision
        this.roles = this.rolesChecked.checkedRoles;
    }

    logout() {
        this.auth.logout();
    }
}