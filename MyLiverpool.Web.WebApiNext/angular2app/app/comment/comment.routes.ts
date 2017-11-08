﻿import { Routes } from "@angular/router";
import { CommentListComponent } from "./comment-list";

export const commentRoutes: Routes = [
    {
        path: "materialComments",
        children: [
            { path: "", component: CommentListComponent, data: { title: "Комментарии" } },
        ]
    }
];