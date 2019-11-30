import { NgModule, LOCALE_ID, Injectable } from '@angular/core';
import {
    BrowserModule,
    HammerGestureConfig,
    HAMMER_GESTURE_CONFIG, } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeRU from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import * as home from './home';
import { MaterialCoreModule } from '@materials/core';
import { SharedModule, CustomTitleMetaService } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { PipesModule } from './base/pipes';
import { SignalRModule } from '@base/signalr';
import { AuthModule } from '@base/auth';
import { StorageModule } from '@base/storage';
import { LoaderModule } from '@base/loader';
import { BreadcrumbModule } from '@base/breadcrumbs';
import { DynamicContentOutletModule } from '@layout/modules/dynamic-content-outlet/dynamic-content-outlet.module';

registerLocaleData(localeRU);

declare var Hammer: any;
@Injectable()
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
        SharedModule,
        HttpClientModule,
        MaterialCoreModule,
        AppRoutingModule,
        AppMaterialModule,
        PipesModule,
        StorageModule.forRoot(),
        SignalRModule.forRoot(),
        AuthModule.forRoot(),
        LoaderModule.forRoot(),
        BreadcrumbModule.forRoot(),
        DynamicContentOutletModule
    ],
    declarations: [
        home.NavbarComponent,
        home.NavbarMenuComponent,
        AppComponent,
    ],
    exports: [
        home.NavbarMenuComponent
    ],
    providers: [
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
