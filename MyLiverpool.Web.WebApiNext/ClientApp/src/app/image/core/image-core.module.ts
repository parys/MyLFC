import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { ImageService } from "./image.service";
import { ImageAdditionComponent } from "./image-addition";
import { ImageCropperModule } from "ngx-image-cropper";

@NgModule({
    imports: [
        SharedModule,
        ImageCropperModule
    ],
    declarations: [
        ImageAdditionComponent
    ],
    exports: [
        ImageAdditionComponent
    ],
    providers: [
        ImageService
    ]
})
export class ImageCoreModule { }