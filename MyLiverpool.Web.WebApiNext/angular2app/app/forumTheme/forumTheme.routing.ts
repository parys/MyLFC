import { Routes } from "@angular/router";
import { ForumThemeListComponent, ForumThemeEditComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const forumThemeRoutes: Routes = [
    { path: "forum/theme/:id", component: ForumThemeListComponent, data: { title: "Тема форума" } },
    {
        path: "forum/theme/:id/edit",
        component: ForumThemeEditComponent,
        data: { title: "Создание темы", roles: ["newsStart"] },
        canActivate: [RoleGuard]
    }
];