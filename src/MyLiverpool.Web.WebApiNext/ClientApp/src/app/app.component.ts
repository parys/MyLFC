import { Component, OnInit, ViewEncapsulation, PLATFORM_ID, Inject, ViewChild, HostListener, ChangeDetectionStrategy } from "@angular/core";  
import { isPlatformBrowser } from "@angular/common";  
import { MatSidenav } from "@angular/material/sidenav";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter, map } from "rxjs/operators"
import { AuthService } from "@app/+auth";
import { SlideInOutAnimation } from "./+keyframes";
import { CustomTitleMetaService as CustomTitleService } from "@app/shared";
import { SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT, SLIDE_IN_RIGHT, SLIDE_IN_LEFT } from "@app/+constants";


@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    animations: [SlideInOutAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    public currentPageIndex = 1;
    animationState = ["", "", ""];
    orderState = [0, 1, 2];
    private resizeDisable: boolean = true;

    @HostListener("window:resize", ["$event"])
    public sizeChange(event: any) {
        this.updateGestureState();
    }

    @ViewChild("sidenav", { static: true })sidenav: MatSidenav;
    constructor(private router: Router,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private titleService: CustomTitleService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {       
    }

    public ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            // This starts up the token refresh preocess for the app
            this.authService.init()
                .subscribe(() => {},
                    e => console.warn(e)
            );
            this.updateGestureState();
        }

        this.initTitleSubscriber();
    }

    public swiperight(evt: any): void {
        if (this.resizeDisable) {
            return;
        }
        this.animationState[this.currentPageIndex] = SLIDE_OUT_RIGHT;

        if (this.currentPageIndex === 0) {
            this.orderState = [0, 1, 2];
            this.currentPageIndex = 2;
        } else if (this.currentPageIndex === 1) {
            this.orderState = [2, 0, 1];
        } else {
            this.orderState = [1, 2, 0];
        }
        this.currentPageIndex--;

        this.animationState[this.currentPageIndex] = SLIDE_IN_LEFT;
    }

    public swipeleft(evt: any): void {
        if (this.resizeDisable) {
            return;
        }
        this.animationState[this.currentPageIndex] = SLIDE_OUT_LEFT;
        if (this.currentPageIndex === 2) {
            this.orderState = [1, 2, 0];
            this.currentPageIndex = 0;
        } else if (this.currentPageIndex === 1) {
            this.orderState = [2, 0, 1];
        } else {
            this.orderState = [1, 2, 0];
        }
        this.currentPageIndex++;

        this.animationState[this.currentPageIndex] = SLIDE_IN_RIGHT;
    }

    private initTitleSubscriber() {
        this.router.events.pipe(
            filter((event: any) => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                this.sidenav.close();
                this.updateGestureState(true);
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else {
                        return child.snapshot.data;
                    }
                }
                return null;
            })).subscribe((data: any) => {
            if (data["title"]) {
                this.titleService.setTitle(data["title"]);
            }
            this.titleService.updateKeywordsMetaTag(data["keywords"] || "" );
            this.titleService.updateDescriptionMetaTag(data["description"] || "" );
            this.titleService.updateTypeMetaTag(data["ogType"] || "website" );
                this.titleService.updateOgImageMetaTag("https://mylfc.ru/content/logo34.png");
        });
    }

    private updateGestureState(force: boolean = false): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const resizeDisableNow = window.innerWidth > 767;
        if (this.resizeDisable === resizeDisableNow && !force) { return; }
        this.resizeDisable = resizeDisableNow;
        if (!resizeDisableNow) {
            this.animationState = [SLIDE_OUT_LEFT, "", SLIDE_OUT_RIGHT];
        } else {
            this.animationState = ["", "", ""];
        }

        this.currentPageIndex = 1;
        this.orderState = [0, 1, 2];
    }
}