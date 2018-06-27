import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { materialRoutes } from "./material.routes";
import { MaterialCoreModule } from "../core/material-core.module";
import { MaterialDetailComponent } from "./material-detail";
import { CommentCoreModule } from "@app/comment";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(materialRoutes),
        CommentCoreModule,
        MaterialCoreModule
    ],
    declarations: [
        MaterialDetailComponent
    ]
})
export class MaterialModule { }