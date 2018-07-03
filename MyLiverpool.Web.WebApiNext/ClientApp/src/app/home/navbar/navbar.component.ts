import { Component } from "@angular/core";
import { RolesCheckedService } from "@app/+auth";

@Component({
    selector: "<navbar>",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
    constructor(public roles: RolesCheckedService) {
    }
}