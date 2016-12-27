import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { Location } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Image } from "./image.model";
import { RolesCheckedService, IRoles, LocalStorageService } from "../shared/index";
import { FileUploader } from "ng2-file-upload/ng2-file-upload";


@Component({
    selector: "image-edit",
    template: require("./image-edit.component.html")
})
export class ImageEditComponent implements OnInit, OnDestroy {
    private url: string = "upload/images/";
    uploadedFile: string;
    @Input() item: Image;
    uploader: FileUploader = new FileUploader({
         authToken: this.storage.getAccessTokenWithType(),
         url: this.configuration.serverWithApiUrl + this.url,
         removeAfterUpload: true,
         allowedFileType: this.configuration.allowedImageTypes
    });

    constructor(private configuration: Configuration,
        private storage: LocalStorageService
    ) {
    }

    ngOnInit() {                                
    }

    ngOnDestroy() { }

    upload() {
        this.uploader.queue[0].onComplete = (response: string, status: number, headers: any) => { 
            this.uploadedFile = response;
        }
        this.uploader.queue[0].upload();
    }
}