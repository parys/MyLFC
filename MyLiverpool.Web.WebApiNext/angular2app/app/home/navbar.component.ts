import { Component } from "@angular/core";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "<navbar>",
    template: require("./navbar.component.html")
})
export class NavbarComponent {
    roles: IRoles;

    constructor(private rolesChecked: RolesCheckedService) {
        this.roles = this.rolesChecked.checkRoles();
    }
}