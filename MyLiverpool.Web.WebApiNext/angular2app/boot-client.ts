import "./__2.1.1.workaround.ts";
import "angular2-universal-polyfills/browser";
import { platformUniversalDynamic } from "angular2-universal";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";
import "bootstrap";
    
const platform = platformUniversalDynamic();                                                                     
// Enable either Hot Module Reloading or production mode
if (module["hot"]) {
    module["hot"].accept();
    module["hot"].dispose(() => { platform.destroy(); });
} else {
    enableProdMode();
}

// Boot the application, either now or when the DOM content is loaded

const bootApplication = () => { platform.bootstrapModule(AppModule); };
if (document.readyState === "complete") {
    bootApplication();
} else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}