import { Component } from "@angular/core";
import { RolesCheckedService } from "../shared/roles-checked.service";
import { AuthService } from "../auth/auth.service";
import { IRoles } from "../shared/roles.interface";

@Component({
    selector: "<navbar>",
    template: require("./navbar.component.html")
})
export class NavbarComponent {
    roles: IRoles;

    constructor(
        private rolesChecked: RolesCheckedService,
        public auth: AuthService) {

        this.roles = this.rolesChecked.checkRoles();
    }

    logout() {
        this.auth.logout();
        this.roles = this.rolesChecked.checkRoles();
    }
}