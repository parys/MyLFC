import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@layout/layout.module';

import { SidebarLeftComponent } from './sidebar-left.component';
import { LeftSidebarMaterialModule } from './sidebar-left-material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutModule,
        LeftSidebarMaterialModule
    ],
    declarations: [
        SidebarLeftComponent
    ],
    entryComponents: [
        SidebarLeftComponent
    ]
})
export class SidebarLeftModule {
    static dynamicComponentsMap = {
        SidebarLeftComponent
    };
}
