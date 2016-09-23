import { Routes }         from '@angular/router';
import {UserDetailComponent} from "./user-detail.component";
export const userRoutes: Routes = [
  //  { path: 'news/list/:page/:categoryId', component: NewsListComponent },
    { path: 'user/:id', component: UserDetailComponent }
  //  { path: 'news/:id/edit', component: NewsEditComponent }
];