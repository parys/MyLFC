import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppModuleShared } from './app.module';


@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        AppModuleShared,
        NoopAnimationsModule,
        ServerModule,
        ServerTransferStateModule,
        ModuleMapLoaderModule,
    ]
})
export class AppServerModule {
}
