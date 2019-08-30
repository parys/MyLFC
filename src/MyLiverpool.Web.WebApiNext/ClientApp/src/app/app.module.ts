import { NgModule, LOCALE_ID } from '@angular/core';
import {
    BrowserModule,
    HammerGestureConfig,
    HAMMER_GESTURE_CONFIG, } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeRU from '@angular/common/locales/ru';

// import { PrebootModule } from "preboot";

import { BreadcrumbService } from '@app/shared/breadcrumb';
import { AppComponent } from './app.component';
// import { ForumModule } from "./forum";
import { ChatModule } from './chat';
import * as home from './home';
import { InjuryCoreModule } from '@injuries/core';
import { LayoutModule } from '@layout/layout.module';
import { MaterialCoreModule } from '@materials/core';
import { SharedModule, CustomTitleMetaService } from './shared';
import * as admin from './admin';
import { AccountCoreModule } from '@accounts/core';
import { TransferCoreModule } from '@transfers/core';
import { CommentCoreModule } from '@comments/core';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { PipesModule } from './base/pipes';

registerLocaleData(localeRU);
// import { PollCoreModule } from "./poll";

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig {
    buildHammer(element: HTMLElement) {
        const mc = new Hammer(element, {
            touchAction: 'pan-y',
            cssProps: {
                userSelect: 'auto',
            }
        });
        return mc;
    }
}

// @Injectable()
// export class UIErrorHandler extends ErrorHandler {
//    constructor() {
//        super();
//    }
//    handleError(error: any) {
//        super.handleError(error);
//        alert(`Error occurred:${error.message}`);
//    }
// }

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'mylfc' }),
        //    PrebootModule.withConfig({ appRoot: "app" }),
        SharedModule,
        HttpClientModule,
        AccountCoreModule,
        //  ForumModule,
        InjuryCoreModule,
        ChatModule,
        CommentCoreModule,
        LayoutModule,
        TransferCoreModule,
        MaterialCoreModule,
     //   PollCoreModule,
        AppRoutingModule,
        AppMaterialModule,
        PipesModule
    ],
    declarations: [
        home.NavbarComponent,
        home.NavbarMenuComponent,
        home.SidebarLeftComponent,
        home.SidebarRightComponent,
        AppComponent,
        admin.CupTableComponent,
        admin.EplTableComponent
    ],
    exports: [
        home.NavbarMenuComponent
    ],
    providers: [
        admin.AdminService,
        BreadcrumbService,
        CustomTitleMetaService,
        { provide: LOCALE_ID, useValue: 'ru-RU' },
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig,
        },
        // {
        //    provide: ErrorHandler,
        //    useClass: UIErrorHandler
        // }
    ]
})
export class AppModuleShared { }
