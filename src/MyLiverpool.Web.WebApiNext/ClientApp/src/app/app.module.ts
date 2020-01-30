import { NgModule, LOCALE_ID, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeRU from '@angular/common/locales/ru';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

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
import { environment } from '@environments/environment';
import { getAccessToken } from '@auth/auth.module';
import { resolve } from 'dns';

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

     //   await getFeaturesOptions(injector);
    };
}

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'mylfc' }),
        SharedModule,
        NgxsModule.forRoot([]),
        NgxsReduxDevtoolsPluginModule.forRoot({
            disabled: environment.production
        }),
        NgxsLoggerPluginModule.forRoot({
            disabled: environment.production
        }),
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
    ],
    providers: [
        CustomTitleMetaService,
        { provide: LOCALE_ID, useValue: 'ru-RU' },
        { provide: APP_INITIALIZER, useFactory: runAppInitializerFactories, deps: [Injector], multi: true },

        // {
        //    provide: ErrorHandler,
        //    useClass: UIErrorHandler
        // }
    ]
})
export class AppModuleShared { }
