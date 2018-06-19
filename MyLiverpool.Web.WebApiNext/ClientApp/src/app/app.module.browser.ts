import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        AppModuleShared,
   //     ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        //   { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AppModule {
}

//export function getBaseUrl() {
//    return document.getElementsByTagName("base")[0].href;
//}
