import "./polyfills/browser.polyfills";
import { AppModule } from "./app/app.module.browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment";

if (environment.production) {
    enableProdMode();
}

export function getBaseUrl() {
    return document.getElementsByTagName("base")[0].href;
}

const providers = [
    { provide: "BASE_URL", useFactory: getBaseUrl, deps: <any[]>[] },
];

document.addEventListener("DOMContentLoaded", () => {
    platformBrowserDynamic(providers).bootstrapModule(AppModule)
        .catch(err => console.log(err));
});

//platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
//    if ('serviceWorker' in navigator && environment.production) {
//        navigator.serviceWorker.register('/ngsw-worker.js');
//    }
//}).catch(err => console.log(err))