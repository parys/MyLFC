import { Component } from "@angular/core";
import { RolesCheckedService, AuthService } from "../../shared/index";

@Component({
    selector: "sidebar-right",
    templateUrl: "./sidebar-right.component.html"
})
export class SidebarRightComponent {

    constructor(public roles: RolesCheckedService,
        private authService: AuthService) {
    }

    public logout(): void {
        this.authService.logout();
    }
}