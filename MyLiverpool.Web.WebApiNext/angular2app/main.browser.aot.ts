import "./polyfills/browser.polyfills";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModuleNgFactory } from "../temp-js/aot/angular2app/app/app.module.browser.ngfactory";

var rootElemTagName = "app";

enableProdMode();


// boot the application, either now or when the DOM content is loaded

const platform = platformBrowserDynamic();
const bootApplication = () => { platform.bootstrapModuleFactory(AppModuleNgFactory); };
if (document.readyState === "complete") {
    bootApplication();
} else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}