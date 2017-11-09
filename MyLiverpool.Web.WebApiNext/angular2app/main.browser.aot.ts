import "./polyfills/browser.polyfills";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModuleNgFactory } from "../temp-js/aot/angular2app/app/app.module.browser.ngfactory";
enableProdMode();

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory); 