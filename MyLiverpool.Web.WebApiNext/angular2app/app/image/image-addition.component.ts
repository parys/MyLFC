import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
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
    selector: "image-addition",
    template: require("./image-addition.component.html")
})
export class ImageAdditionComponent implements OnInit, OnDestroy {
    uploadedFiles: string[];
    @Input()
    isMultiple: boolean = true;
    @Input()
    controlName: string = "upload-image";

    buttonName: string;
    @Output()
    loadedImage = new EventEmitter<string>();

    constructor(private configuration: Configuration,
        private storage: LocalStorageService,
        private service: ImageService
    ) { 
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void { }

    ngAfterViewInit(): void {
        this.buttonName = this.isMultiple ? "Загрузить изображения" : "Загрузить изображение";
    }

    onUploadImage(event: any) {
        if (event.currentTarget.files.length > 0) {
            this.service.uploadImage(event.currentTarget.files)
                .subscribe(result => {
                        if (this.isMultiple) {
                            this.uploadedFiles = result;
                        } else {
                            this.loadedImage.emit(result[0]);
                        }
                    },
                    error => console.log(error));
        }
    }
}