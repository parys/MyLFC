import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ImageCoreModule } from '@images/core';
import { MaterialCategoryCoreModule } from '@material-categories/core';
import { MaterialCoreModule } from '@materials/core/material-core.module';
import { MaterialEditComponent } from '@materials/lazy/+material-edit/pages/material-edit.component';
import { materialEditRoutes } from '@materials/lazy/+material-edit/material-edit.routes';
import { EditorModule } from '@editor/editor.module';
import { MaterialLeaveGuard } from './leave-guard/leave-guard.service';
import { MaterialEditMaterialModule } from './material-edit-material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(materialEditRoutes),
        EditorModule,
        MaterialCoreModule,
        MaterialCategoryCoreModule,
        ImageCoreModule,
        MaterialEditMaterialModule
    ],
    declarations: [
        MaterialEditComponent,
    ],
    providers: [
        MaterialLeaveGuard
    ]
})
export class MaterialEditModule { }
