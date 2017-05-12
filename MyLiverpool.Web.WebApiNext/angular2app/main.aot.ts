import "./polyfills";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
//import { AppModuleNgFactory } from "../wwwroot/aot/angular2app/app/app.module.ngfactory";

import "./jquery-global.js";

//import * as jQuery_ from "jquery";
//const jQuery: JQueryStatic = (<JQueryStatic>jQuery_).default || jQuery_; 
//import "bootstrap";

var rootElemTagName = "app";

enableProdMode();


// boot the application, either now or when the DOM content is loaded

const platform = platformBrowserDynamic();
//const bootApplication = () => { platform.bootstrapModuleFactory(AppModuleNgFactory); };
if (document.readyState === "complete") {
 //   bootApplication();
} else {
  //  document.addEventListener("DOMContentLoaded", bootApplication);
}