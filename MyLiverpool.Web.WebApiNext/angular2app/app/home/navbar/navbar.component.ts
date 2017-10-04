import { Component } from "@angular/core";
import { RolesCheckedService } from "../../shared/index";

@Component({
    selector: "<navbar>",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent {

    constructor(public roles: RolesCheckedService) {
    }
}