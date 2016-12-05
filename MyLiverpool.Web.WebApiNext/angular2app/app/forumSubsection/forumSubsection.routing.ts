import { Routes } from "@angular/router";
import { ForumSubsectionListComponent } from "./index";

export const forumSubsectionRoutes: Routes = [
    { path: "forum/:id", component: ForumSubsectionListComponent, data: { title: "Раздел форума" } }
];