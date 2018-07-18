import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { RolesCheckedService } from "@app/+auth";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Output() public toggle: EventEmitter<any> = new EventEmitter();
    constructor(public roles: RolesCheckedService) {
    }
}