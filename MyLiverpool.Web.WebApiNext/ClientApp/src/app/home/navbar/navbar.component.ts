import { Component } from "@angular/core";
import { RolesCheckedService } from "@app/shared";

@Component({
    selector: "<navbar>",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent {
    constructor(public roles: RolesCheckedService) {
    }
}