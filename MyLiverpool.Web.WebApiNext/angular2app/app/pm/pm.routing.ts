import { Routes } from "@angular/router";
import { PmListComponent, PmDetailComponent, PmEditComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const pmRoutes: Routes = [
    { path: "pm/:id/edit", component: PmEditComponent, data: { title: "Написание личного сообщения" }, canActivate: [RoleGuard] },
    { path: "pm/:id", component: PmDetailComponent, data: { title: "Личное сообщение" }, canActivate: [RoleGuard] },
    { path: "pm", component: PmListComponent, data: { title: "Личные сообщения" }, canActivate: [RoleGuard] },
];