import { Component, HostListener, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { RolesCheckedService } from "@app/+auth";

@Component({
    selector: "sidebar-left",
    templateUrl: "./sidebar-left.component.html",
    styleUrls: ["./sidebar-left.component.scss"]
})
export class SidebarLeftComponent {
    @HostListener("window:scroll", [])
    public onWindowScroll() {
        if (isPlatformBrowser(this.platformId)) {
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            if (scrollPos >= 200)
                document.getElementById("goToTop").className = "";
            else
                document.getElementById("goToTop").className = "hidden";
        }
    }
    constructor(public roles: RolesCheckedService,
        @Inject(PLATFORM_ID) private platformId: Object) {
    }

    public goToTop(): void {
        scrollTo(0,0);
    }
}