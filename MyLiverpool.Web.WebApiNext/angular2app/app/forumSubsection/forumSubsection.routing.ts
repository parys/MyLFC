import { Routes } from "@angular/router";
import { ForumSubsectionListComponent, ForumSubsectionEditComponent } from "./index";

export const forumSubsectionRoutes: Routes = [
    { path: "forum/:id", component: ForumSubsectionListComponent, data: { title: "Раздел форума" } },
    { path: "forum/:id/edit", component: ForumSubsectionEditComponent, data: { title: "Создание подраздела" }}
];