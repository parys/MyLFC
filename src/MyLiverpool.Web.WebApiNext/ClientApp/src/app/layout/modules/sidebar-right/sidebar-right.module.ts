import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@layout/layout.module';
import { ChatModule } from '@chat/chat.module';
import { SidebarRightComponent } from './sidebar-right.component';
import { AccountCoreModule } from '@accounts/core';
import { RightSidebarMaterialModule } from './sidebar-right-material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RightSidebarMaterialModule,
        LayoutModule,
        ChatModule,
        AccountCoreModule,
    ],
    declarations: [
        SidebarRightComponent
    ],
    entryComponents: [
        SidebarRightComponent
    ]
})
export class SidebarRightModule {
    static dynamicComponentsMap = {
        SidebarRightComponent
    };
 }
