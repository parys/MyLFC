import { NgModule, LOCALE_ID, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData, CommonModule } from '@angular/common';
import localeRU from '@angular/common/locales/ru';

import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { MaterialCoreModule } from '@materials/core/material-core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { PipesModule } from './base/pipes';
import { SignalRModule } from '@base/signalr';
import { AuthModule } from '@base/auth';
import { StorageModule } from '@base/storage';
import { LoaderModule } from '@base/loader';
import { BreadcrumbModule } from '@base/breadcrumbs';
import { DynamicContentOutletModule } from '@layout/dynamic-content-outlet/dynamic-content-outlet.module';
import { getAccessToken } from '@auth/auth.module';
import { CoreModule } from '@core/core.module';
import { NoticesModule } from '@notices/notices.module';
import { MobileLayoutModule } from '@layout/modules/mobile-layout/mobile-layout.module';
import { OdModule } from './od';
import { NavbarModule } from './home/navbar/navbar.module';

registerLocaleData(localeRU);


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

export function runAppInitializerFactories(injector: Injector): () => Promise<any> {
    return async () => {
        await getAccessToken(injector);
    };
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({ appId: 'mylfc' }),
        CoreModule.forRoot(),
        NgxsModule.forRoot([]),
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
        NoticesModule.forRoot(),
        DynamicContentOutletModule,
        MobileLayoutModule,
        OdModule,
        NavbarModule
    ],
    declarations: [
        AppComponent,
    ],
    exports: [
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru-RU' },
        { provide: APP_INITIALIZER, useFactory: runAppInitializerFactories, deps: [Injector], multi: true },

        // {
        //    provide: ErrorHandler,
        //    useClass: UIErrorHandler
        // }
    ]
})
export class AppModuleShared { }
