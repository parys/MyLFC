import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { materialCategoryRoutes } from "./materialCategory.routes";
import { MaterialCategoryListComponent } from "./materialCategory-list";
import { MaterialCategoryEditComponent } from "./materialCategory-edit";
import { MaterialCategoryCoreModule } from "../core";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(materialCategoryRoutes),
        MaterialCategoryCoreModule
    ],
    declarations: [
        MaterialCategoryListComponent,
        MaterialCategoryEditComponent
    ]
})
export class MaterialCategoryModule { }  