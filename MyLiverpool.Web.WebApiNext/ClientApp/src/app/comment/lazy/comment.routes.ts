import { Routes } from "@angular/router";
import { CommentListComponent } from "./comment-list";

export const commentRoutes: Routes = [
    { path: "", component: CommentListComponent, data: { title: "Комментарии" } },
];