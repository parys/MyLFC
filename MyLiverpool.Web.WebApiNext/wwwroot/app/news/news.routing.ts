import { Routes }         from '@angular/router';
import {NewsListComponent} from "./news-list/news-list.component";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {NewsEditComponent} from "./news-edit/news-edit.component";
export const newsRoutes: Routes = [
    { path: 'news?:page&:categoryId', component: NewsListComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    { path: 'news/:id/edit', component: NewsEditComponent }
];