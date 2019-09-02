import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/index';
import { LayoutModule } from '@layout/layout.module';
import { PipesModule } from '@base/pipes';

import { MaterialActivateDialogComponent } from '@materials/core/material-activate-dialog';
import { MaterialService } from '@materials/core/material.service';
import { MaterialHomeComponent } from '@materials/core/material-home';
import { MaterialItemComponent } from '@materials/core/material-item';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        LayoutModule,
        PipesModule
    ],
    declarations: [
        MaterialHomeComponent,
        MaterialActivateDialogComponent,
        MaterialItemComponent
    ],
    entryComponents: [
        MaterialActivateDialogComponent
    ],
    providers: [
        MaterialService
    ]
})
export class MaterialCoreModule { }
