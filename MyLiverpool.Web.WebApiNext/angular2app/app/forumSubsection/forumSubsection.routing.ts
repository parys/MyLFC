import { Routes } from "@angular/router";
import { ForumSubsectionListComponent, ForumSubsectionEditComponent } from "./index";
import { RoleGuard } from "../auth/index";

export const forumSubsectionRoutes: Routes = [
    { path: "forum/:id", component: ForumSubsectionListComponent, data: { title: "Раздел форума" } },
    { path: "forum/:id/edit", component: ForumSubsectionEditComponent, data: {
        title: "Создание подраздела",
        roles: ["newsStart"] // todo add role for forum
    }, canActivate: [RoleGuard]}
];