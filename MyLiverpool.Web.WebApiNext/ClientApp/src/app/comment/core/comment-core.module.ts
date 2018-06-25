import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { CommentService } from "./comment.service";
import { CommentDetailComponent } from "./comment-detail";
import { CommentSectionComponent } from "./comment-section";
import { CommentLastComponent } from "./comment-last";
import { EditorModule } from "@app/editor";

@NgModule({
    imports: [
        SharedModule,
        EditorModule,
        RouterModule,
    ],
    declarations: [
        CommentDetailComponent,
        CommentSectionComponent,
        CommentLastComponent,
    ],
    exports: [
        CommentSectionComponent,
        CommentDetailComponent,
        CommentLastComponent,
        EditorModule,
    ],
    providers: [
        CommentService
    ]
})
export class CommentCoreModule { }