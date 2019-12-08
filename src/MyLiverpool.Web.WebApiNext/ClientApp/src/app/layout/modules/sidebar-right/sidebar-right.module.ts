import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@layout/layout.module';
import { ChatModule } from '@chat/chat.module';
import { AccountSigninWidgetModule } from '@widgets/http/account-signin-widget';

import { SidebarRightComponent } from './sidebar-right.component';

import { RightSidebarMaterialModule } from './sidebar-right-material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RightSidebarMaterialModule,
        LayoutModule,
        ChatModule,
        AccountSigninWidgetModule
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
