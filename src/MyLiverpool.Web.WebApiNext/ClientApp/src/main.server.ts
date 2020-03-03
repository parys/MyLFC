import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.module.server';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { provideModuleMap, MODULE_MAP } from '@nguniversal/module-map-ngfactory-loader';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
