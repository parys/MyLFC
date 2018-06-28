import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { ImageService } from "./image.service";
import { ImageAdditionComponent } from "./image-addition";
import { ImageCropperModule } from "ngx-image-cropper";
import { ImageCropAdditionComponent } from "./image-crop-addition";

@NgModule({
    imports: [
        SharedModule,
        ImageCropperModule
    ],
    declarations: [
        ImageAdditionComponent,
        ImageCropAdditionComponent
    ],
    exports: [
        ImageAdditionComponent,
        ImageCropAdditionComponent
    ],
    providers: [
        ImageService
    ]
})
export class ImageCoreModule { }