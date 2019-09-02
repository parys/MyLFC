import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/index';
import { MaterialCategoryService } from './materialCategory.service';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        MaterialCategoryService
    ]
})
export class MaterialCategoryCoreModule { }
