﻿import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppModuleShared } from './app.module';


@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        AppModuleShared,
        ServerModule,
        ModuleMapLoaderModule,
        NoopAnimationsModule,
        ServerTransferStateModule,
    ],
    providers: [
   //     SERVER_RENDER_PROVIDERS
    ]
})
export class AppServerModule {
}
// import { ɵAnimationEngine } from '@angular/animations/browser';

// declarations
// export function instantiateServerRendererFactory(
//    renderer: RendererFactory2, engine: ɵAnimationEngine, zone: NgZone) {
//    return new ɵAnimationRendererFactory(renderer, engine, zone);
// }

// const createRenderer = ɵServerRendererFactory2.prototype.createRenderer;
// ɵServerRendererFactory2.prototype.createRenderer = function () {
//    const result = createRenderer.apply(this, arguments);
//    const setProperty = result.setProperty;
//    result.setProperty = function () {
//        try {
//            setProperty.apply(this, arguments);
//        } catch (e) {
//            if (e.message.indexOf('Found the synthetic') === -1) {
//                throw e;
//            }
//        }
//    };
//    return result;
// }
// export const SERVER_RENDER_PROVIDERS = [
//    {
//        provide: RendererFactory2,
//        useFactory: instantiateServerRendererFactory,
//        deps: [ɵServerRendererFactory2, ɵAnimationEngine, NgZone]
//    }
// ];



