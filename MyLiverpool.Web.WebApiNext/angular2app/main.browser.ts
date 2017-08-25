import "./polyfills";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module.browser";
import "hammerjs";

if (module["hot"]) {
    module["hot"].accept();
    module["hot"].dispose(() => {
        platform.destroy();
    });
} else {
    enableProdMode();
}

// boot the application, either now or when the DOM content is loaded

const platform = platformBrowserDynamic();
const bootApplication = () => { platform.bootstrapModule(AppModule); };
if (document.readyState === "complete") {
    bootApplication();
} else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}