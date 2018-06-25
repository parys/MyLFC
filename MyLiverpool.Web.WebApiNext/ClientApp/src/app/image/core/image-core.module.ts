import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { ImageService } from "./image.service";
import { ImageAdditionComponent } from "./image-addition";

@NgModule({
    imports: [
        SharedModule,
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