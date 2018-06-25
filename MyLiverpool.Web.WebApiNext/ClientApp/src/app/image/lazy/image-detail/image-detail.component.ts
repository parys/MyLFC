import { Component, Input } from "@angular/core";
import { Image } from "../../model";                          

@Component({
    selector: "image-detail",
    templateUrl: "./image-detail.component.html"
})
export class ImageDetailComponent {
    @Input() item: Image; 

    constructor(
    ) {
    }
}