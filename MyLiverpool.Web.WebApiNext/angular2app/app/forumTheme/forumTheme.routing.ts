import { Routes } from "@angular/router";
import { ForumThemeListComponent } from "./index";

export const forumThemeRoutes: Routes = [
    { path: "forum/theme/:id", component: ForumThemeListComponent, data: { title: "Тема форума" } },
   // { path: "forum/:id/edit", component: ForumSubsectionEditComponent, data: { title: "Создание подраздела" } }
];