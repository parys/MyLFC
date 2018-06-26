import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { materialRoutes } from "./material.routes";
import { MaterialCoreModule } from "../core/material-core.module";
import { MaterialDetailComponent } from "./material-detail";
import { MaterialEditComponent } from "./material-edit";
import { CommentCoreModule } from "@app/comment";
import { ImageCoreModule } from "@app/image";
import { MaterialCategoryCoreModule } from "@app/materialCategory";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(materialRoutes),
        CommentCoreModule,
        MaterialCoreModule,
        MaterialCategoryCoreModule,
        ImageCoreModule
    ],
    declarations: [
        MaterialDetailComponent,
        MaterialEditComponent,
    ]
})
export class MaterialModule { }