import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { materialCategoryRoutes } from "./materialCategory.routes";
import { MaterialCategoryListComponent } from "./materialCategory-list";
import { MaterialCategoryEditComponent } from "./materialCategory-edit";
import { MaterialCategoryService } from "./materialCategory.service";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(materialCategoryRoutes)
    ],
    declarations: [
        MaterialCategoryListComponent,
        MaterialCategoryEditComponent
    ],
    providers: [
        MaterialCategoryService
    ]
})
export class MaterialCategoryModule { }  