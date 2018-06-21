import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { commentRoutes } from "./comment.routes";
import { CommentListComponent } from "./comment-list";
import { EditorModule } from "@app/editor";
import { CommentCoreModule } from "../core";

@NgModule({
    imports: [
        SharedModule,
        EditorModule,
        RouterModule.forChild(commentRoutes),
        CommentCoreModule
    ],
    declarations: [
        CommentListComponent,
    ]
})
export class CommentModule { }