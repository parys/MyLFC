import { provideRouter, RouterConfig } from '@angular/router';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
//import { AboutComponent } from './about/about.component';

export const routes: RouterConfig = [
    { path: '', component: NewsListComponent },
    { path: 'news', component: NewsDetailComponent }
    // { path: 'about', component: AboutComponent },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];