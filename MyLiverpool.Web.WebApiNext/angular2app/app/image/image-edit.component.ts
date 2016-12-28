import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { Location } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Image } from "./image.model";
import { ImageService } from "./image.service";
import { RolesCheckedService, IRoles, LocalStorageService } from "../shared/index";


@Component({
    selector: "image-edit",
    template: require("./image-edit.component.html")
})
export class ImageEditComponent implements OnInit, OnDestroy {
    uploadedFiles: string[];
    // @Input() item: Image;

    constructor(private configuration: Configuration,
        private storage: LocalStorageService,
        private service: ImageService
    ) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {}

    onUploadImage(event: any) {
        if (event.srcElement.files.length > 0) {
            this.service.uploadImage(event.srcElement.files)
                .subscribe(result => this.uploadedFiles = result,
                    error => console.log(error),
                    () => {});
        }
    }
}