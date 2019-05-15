import { Component, Output, EventEmitter, ChangeDetectionStrategy, PLATFORM_ID, Inject, HostListener } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Output()
    public toggle: EventEmitter<any> = new EventEmitter();
    public showAd: boolean = false;

    @HostListener("window:resize", ["$event"])
    public sizeChange(event: any) {
        if (isPlatformBrowser(this.platformId)) {
            this.showAd = window.innerWidth > 1640;
        }
    }

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            this.showAd = window.innerWidth > 1640;
        }
    }
}