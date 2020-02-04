import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { environment } from '@environments/environment';
import { AppModuleShared } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppModuleShared,
        NoopAnimationsModule,
        BrowserTransferStateModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ]
})
export class AppModule {
}
