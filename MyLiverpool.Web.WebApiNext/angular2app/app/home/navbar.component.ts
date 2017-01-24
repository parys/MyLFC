import { Component } from "@angular/core";
import { RolesCheckedService } from "../shared/roles-checked.service";
import { IRoles } from "../shared/roles.interface";

@Component({
    selector: "<navbar>",
    template: require("./navbar.component.html")
})
export class NavbarComponent {
    roles: IRoles;

    constructor(
        private rolesChecked: RolesCheckedService) {

        this.roles = this.rolesChecked.checkRoles();
    }
}