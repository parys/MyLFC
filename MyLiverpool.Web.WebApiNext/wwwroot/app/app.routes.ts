import { provideRouter, RouterConfig } from '@angular/router';
import { NewsComponent } from './news/news/news.component';
//import { AboutComponent } from './about/about.component';

export const routes: RouterConfig = [
    { path: '', component: NewsComponent },
    // { path: 'about', component: AboutComponent },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];