import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PipesModule } from '@base/pipes';
import { MobileLayoutModule } from '@layout/modules/mobile-layout/mobile-layout.module';

import { MaterialService } from '@materials/core/material.service';
import { MaterialHomeComponent } from '@materials/core/material-home';
import { MaterialItemComponent } from '@materials/core/material-item';
import { MaterialToolsComponent } from './components/material-tools';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MobileLayoutModule,
        PipesModule
    ],
    declarations: [
        MaterialHomeComponent,
        MaterialItemComponent,
        MaterialToolsComponent
    ],
    exports: [
        MaterialToolsComponent
    ],
    providers: [
        MaterialService
    ]
})
export class MaterialCoreModule { }
