import "zone.js/dist/zone-node";
import "./polyfills/server.polyfills";
import { APP_BASE_HREF } from "@angular/common";
import { enableProdMode, ApplicationRef, NgZone } from "@angular/core";
import { createServerRenderer, RenderResult } from "aspnet-prerendering";
import { AppModule } from "./app/app.module.server";
import { ngAspnetCoreEngine, IEngineOptions, createTransferScript } from '@nguniversal/aspnetcore-engine';


enableProdMode();

export default createServerRenderer(params => {
    //const providers = [
    //    { provide: INITIAL_CONFIG, useValue: { document: "<app></app>", url: params.url } },
    //    { provide: APP_BASE_HREF, useValue: params.baseUrl },
    //    { provide: "BASE_URL", useValue: params.origin + params.baseUrl },
    //];
    // Platform-server provider configuration
    const setupOptions: IEngineOptions = {
        appSelector: '<app></app>',
        ngModule: AppModule,
        request: params,
        providers: [
            // Optional - Any other Server providers you want to pass (remember you'll have to provide them for the Browser as well)
        ]
    };

    // ***** Pass in those Providers & your Server NgModule, and that's it!
    return ngAspnetCoreEngine(setupOptions).then(response => {

        // Want to transfer data from Server -> Client?

        // Add transferData to the response.globals Object, and call createTransferScript({}) passing in the Object key/values of data
        // createTransferScript() will JSON Stringify it and return it as a <script> window.TRANSFER_CACHE={}</script>
        // That your browser can pluck and grab the data from
        response.globals.transferData = createTransferScript({
            someData: 'Transfer this to the client on the window.TRANSFER_CACHE {} object',
            fromDotnet: params.data.thisCameFromDotNET // example of data coming from dotnet, in HomeController
        });

        return ({
            html: response.html,
            globals: response.globals
        });

    });
    //return platformDynamicServer(providers).bootstrapModule(AppModule).then(moduleRef => {
    //    const appRef: ApplicationRef = moduleRef.injector.get(ApplicationRef);
    //    const state: PlatformState = moduleRef.injector.get(PlatformState);
    //    const zone: NgZone = moduleRef.injector.get(NgZone);

    //    return new Promise<RenderResult>((resolve, reject) => {
    //        zone.onError.subscribe((errorInfo: any) => reject(errorInfo));
    //        appRef.isStable.first(isStable => isStable).subscribe(() => {
    //            // Because 'onStable' fires before 'onError', we have to delay slightly before
    //            // completing the request in case there's an error to report
    //            setImmediate(() => {
    //                resolve({
    //                    html: state.renderToString()
    //                });
    //                moduleRef.destroy();
    //            });
    //        });
    //    });
    //});
});
