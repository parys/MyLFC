//import "./polyfills";
//import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { enableProdMode } from "@angular/core";
//import { AppModuleNgFactory } from "../wwwroot/aot/angular2app/app/app.module.ngfactory";
//import "bootstrap";

//var rootElemTagName = "app";
//// enable either Hot Module Reloading or production mode
//if (module["hot"]) {
//    module["hot"].accept();
//    module["hot"].dispose(() => {
//        // Before restarting the app, we create a new root element and dispose the old one
//        const oldRootElem = document.querySelector(rootElemTagName);
//        const newRootElem = document.createElement(rootElemTagName);
//        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
//        platform.destroy();
//    });
//} else {
//    enableProdMode();
//}

//// boot the application, either now or when the DOM content is loaded

//const platform = platformBrowserDynamic();
//const bootApplication = () => { platform.bootstrapModuleFactory(AppModuleNgFactory); };
//if (document.readyState === "complete") {
//    bootApplication();
//} else {
//    document.addEventListener("DOMContentLoaded", bootApplication);
//}