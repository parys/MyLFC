import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { ImageCoreModule } from "../core";
import { ImageDetailComponent } from "./image-detail";
import { ImageListComponent } from "./image-list";
import { imageRoutes } from "./image.routes";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(imageRoutes),
        ImageCoreModule
    ],
    declarations: [
        ImageDetailComponent,
        ImageListComponent
    ]
})
export class ImageModule { }