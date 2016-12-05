import { Routes }         from "@angular/router";
import { UserDetailComponent } from "./user-detail.component";
import { UserListComponent } from "./user-list.component";
export const userRoutes: Routes = [
    { path: "user", component: UserListComponent, data: { title: "Пользователи" }  },
    { path: "user/list", component: UserListComponent, data: { title: "Пользователи" }  },
    { path: "user/list/:page", component: UserListComponent },
    { path: "user/list/:page/:userName", component: UserListComponent },
    { path: "user/:id", component: UserDetailComponent, data: { title: "Пользователь" }  }
  //  { path: 'news/:id/edit', component: NewsEditComponent }
];