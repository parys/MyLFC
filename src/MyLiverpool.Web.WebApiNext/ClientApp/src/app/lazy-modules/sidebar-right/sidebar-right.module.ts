import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChatModule } from '@chat/chat.module';
import { AccountSigninWidgetModule } from '@widgets/http/account-signin-widget';

import { RightSidebarMaterialModule } from './sidebar-right-material.module';
import { MobileLayoutModule } from '@layout/modules/mobile-layout/mobile-layout.module';
import {
    UserBirthdayComponent,
    UserOnlineCounterComponent,
    CommentLastComponent,
    SidebarRightComponent
} from './components/';
import { PipesModule } from '@base/pipes';
import { SidebarRightService } from './sidebar-right.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RightSidebarMaterialModule,
        ChatModule,
        AccountSigninWidgetModule,
        MobileLayoutModule,
        PipesModule
    ],
    declarations: [
        UserBirthdayComponent,
        UserOnlineCounterComponent,
        CommentLastComponent,
        SidebarRightComponent
    ],
    providers: [
        SidebarRightService
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
