import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared';
import { MaterialActivateDialogComponent } from './material-activate-dialog';
import { MaterialService } from './material.service';
import { MaterialHomeComponent } from './material-home';
import { MaterialItemComponent } from './material-item';
import { LayoutModule } from '@layout/layout.module';
import { PipesModule } from '@app/base/pipes';

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
