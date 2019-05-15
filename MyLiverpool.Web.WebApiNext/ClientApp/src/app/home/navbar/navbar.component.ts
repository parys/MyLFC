import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Output() public toggle: EventEmitter<any> = new EventEmitter();
    public showAd: boolean;

    constructor() {
        this.showAd = window.innerWidth > 1640;
    }
}