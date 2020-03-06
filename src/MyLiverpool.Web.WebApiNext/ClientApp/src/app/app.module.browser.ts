import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '@environments/environment';
import { AppModuleShared } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppModuleShared,
        BrowserAnimationsModule,
        BrowserTransferStateModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        NgxsReduxDevtoolsPluginModule.forRoot({
            disabled: environment.production
        }),
        NgxsLoggerPluginModule.forRoot({
            disabled: environment.production
        }),
    ]
})
export class AppModule {
}
