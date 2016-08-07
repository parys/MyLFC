import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app';
import { Configuration } from './app.constants';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration
]).catch(err => console.error(err));
