import "./polyfills/browser.polyfills";
import { AppModule } from "./app/app.module.browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));