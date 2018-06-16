import { Component, Input, OnInit, AfterViewChecked } from "@angular/core";

declare let addAd: any;

@Component({
    selector: "ad",
    templateUrl: "ad.component.html"
})

export class AdComponent implements AfterViewChecked, OnInit {
    private done: boolean = false;
    public name: string = null;
    @Input() blockName: string = "";

    ngOnInit(): void {
        this.name = `yandex_rtb_${this.blockName}`;
    }

    public ngAfterViewChecked() {
        if (this.done) return;
        if (addAd(this.blockName)) {
            this.done = true;
        }
    }
}