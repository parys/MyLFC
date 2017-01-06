import { Routes } from "@angular/router";
import { UserDetailComponent } from "./user-detail.component";
import { UserListComponent } from "./user-list.component";
export const userRoutes: Routes = [
    {
        path: "user",
        children: [
            { path: "", component: UserListComponent, data: { title: "Пользователи" } },
            {
                path: "list",
                children: [
                    { path: "", component: UserListComponent, data: { title: "Пользователи" } },
                    {
                        path: ":page",
                        children: [
                            { path: "", component: UserListComponent, data: { title: "Пользователи" } },
                            {
                                path: ":userName",
                                component: UserListComponent,
                                data: { title: "Пользователи" }
                            } //todo maybe change to query?
                        ]
                    }
                ]
            },
            { path: ":id", component: UserDetailComponent, data: { title: "Пользователь" } }
        ]
    }
];  