import { Component } from "@angular/core";
import { RolesCheckedService } from "@app/+auth";

@Component({
    selector: "navbar-menu",
    templateUrl: "./navbar-menu.component.html",
    styleUrls: ["./navbar-menu.component.scss"]
})
export class NavbarMenuComponent {
    constructor(public roles: RolesCheckedService) {
    }
}