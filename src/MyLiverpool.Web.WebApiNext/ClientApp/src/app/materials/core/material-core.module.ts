import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/index';
import { PipesModule } from '@base/pipes';
import { MobileLayoutModule } from '@layout/modules/mobile-layout/mobile-layout.module';

import { MaterialService } from '@materials/core/material.service';
import { MaterialHomeComponent } from '@materials/core/material-home';
import { MaterialItemComponent } from '@materials/core/material-item';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        MobileLayoutModule,
        PipesModule
    ],
    declarations: [
        MaterialHomeComponent,
        MaterialItemComponent
    ],
    providers: [
        MaterialService
    ]
})
export class MaterialCoreModule { }
