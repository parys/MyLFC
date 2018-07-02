import { Component, Input, OnInit, AfterViewInit, ChangeDetectionStrategy, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
    selector: "ad",
    templateUrl: "ad.component.html",
    styleUrls: ["ad.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AdComponent implements AfterViewInit, OnInit {
    private done: boolean = false;
    public name: string = null;
    @Input() blockName: string = "";

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {
        this.name = `yandex_rtb_${this.blockName}`;
    }

    public ngAfterViewInit() {
        if (this.done || isPlatformBrowser(this.platformId)) return;
        if (addAd(this.blockName)) {
            this.done = true;
        }
    }
}