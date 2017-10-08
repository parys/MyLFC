import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "@app/shared";
import { commentRoutes } from "./comment.routes";
import { CommentService } from "./comment.service";
import { CommentDetailComponent } from "./comment-detail/index";
import { CommentListComponent } from "./comment-list/index";
import { CommentSectionComponent } from "./comment-section/index";
import { CommentLastComponent } from "./comment-last/index";
import { EditorModule } from "@app/editor";

@NgModule({
    imports: [
        CommonModule,
        EditorModule,
        NgxPaginationModule,
        RouterModule.forRoot(commentRoutes),
        SharedModule
    ],
    declarations: [
        CommentDetailComponent,
        CommentListComponent,
        CommentSectionComponent,
        CommentLastComponent,
    ],
    exports: [
        CommentSectionComponent,
        CommentLastComponent
    ],
    providers: [
        CommentService
    ]
})
export class CommentModule { }