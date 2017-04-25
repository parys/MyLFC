import { Component } from "@angular/core";
import { RolesCheckedService, IRoles } from "../shared/index";
import { AuthService } from "../auth/index";

@Component({
    selector: "right-sidebar",
    template: require("./rightSidebar.component.html")
})
export class RightSidebarComponent {
    roles: IRoles;

    constructor(private rolesChecked: RolesCheckedService,
        private authService: AuthService) {
        this.roles = this.rolesChecked.checkRoles();
    }

    logout() {
        this.authService.logout();
    }
}