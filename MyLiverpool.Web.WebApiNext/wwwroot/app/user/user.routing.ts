import { Routes }         from "@angular/router";
import {UserDetailComponent} from "./user-detail.component";
import {UserListComponent} from "./user-list.component";
export const userRoutes: Routes = [
    { path: 'user', component: UserListComponent },
    { path: 'user/list', component: UserListComponent },
    { path: 'user/list/:page', component: UserListComponent },
    { path: 'user/list/:page/:userName', component: UserListComponent },
    { path: 'user/:id', component: UserDetailComponent }
  //  { path: 'news/:id/edit', component: NewsEditComponent }
];