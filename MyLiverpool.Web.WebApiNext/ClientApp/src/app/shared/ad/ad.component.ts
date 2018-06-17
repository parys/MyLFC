import { Component, Input, OnInit, AfterViewInit } from "@angular/core";

declare let addAd: any;

@Component({
    selector: "ad",
    templateUrl: "ad.component.html"
})

export class AdComponent implements AfterViewInit, OnInit {
    private done: boolean = false;
    public name: string = null;
    @Input() blockName: string = "";

    ngOnInit(): void {
        this.name = `yandex_rtb_${this.blockName}`;
    }

    public ngAfterViewInit() {
        if (this.done) return;
        if (addAd(this.blockName)) {
            this.done = true;
        }
    }
}