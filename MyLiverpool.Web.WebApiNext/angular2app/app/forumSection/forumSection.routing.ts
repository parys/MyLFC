import { Routes } from "@angular/router";
import { ForumSectionListComponent } from "./index";

export const forumSectionRoutes: Routes = [
    { path: "forum", component: ForumSectionListComponent, data: { title: "Форум" } }
];