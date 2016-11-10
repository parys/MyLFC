import { UserDetailComponent } from "./user-detail.component";
import { UserListComponent } from "./user-list.component";
export var userRoutes = [
    { path: 'user', component: UserListComponent },
    { path: 'user/list', component: UserListComponent },
    { path: 'user/list/:page', component: UserListComponent },
    { path: 'user/list/:page/:userName', component: UserListComponent },
    { path: 'user/:id', component: UserDetailComponent }
];
//# sourceMappingURL=user.routing.js.map