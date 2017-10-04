import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Image } from "./image.model";                          

@Component({
    selector: "image-detail",
    templateUrl: "./image-detail.component.html"
})
export class ImageDetailComponent implements OnInit, OnDestroy {
    @Input() item: Image; 

    constructor(
    ) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}