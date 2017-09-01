import { Component } from "@angular/core";
import { RolesCheckedService, IRoles } from "../../shared/index";
import { AuthService } from "../../auth/index";

@Component({
    selector: "sidebar-left",
    templateUrl: "./sidebar-left.component.html",
    styleUrls: ["./sidebar-left.component.css"]
})
export class SidebarLeftComponent {
    public roles: IRoles;

    constructor(private rolesChecked: RolesCheckedService,
        private authService: AuthService) {
        this.roles = this.rolesChecked.checkRoles();
    }

    public goToTop(): void {
        scrollTo(0,0);
    }
}

window.onscroll = oEvent => {
    var scrollPos = document.getElementsByTagName("body")[0].scrollTop;

    if (scrollPos >= 200)
        document.getElementById("goToTop").className = "";
    else
        document.getElementById("goToTop").className = "hidden";
};