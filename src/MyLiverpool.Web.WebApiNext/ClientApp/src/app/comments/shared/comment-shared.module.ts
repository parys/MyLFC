import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { CommentService } from "../core/comment.service";
import { CommentCoreModule } from "../core";
import { CommentDetailComponent } from "./comment-detail";
import { CommentSectionComponent } from "./comment-section";
import { EditorModule } from "@app/editor";
import { PipesModule } from '@app/base/pipes';

@NgModule({
    imports: [
        SharedModule,
        EditorModule,
        RouterModule,
        CommentCoreModule,
        PipesModule
    ],
    declarations: [
        CommentDetailComponent,
        CommentSectionComponent
    ],
    exports: [
        CommentSectionComponent,
        CommentDetailComponent,
        EditorModule
    ],
    providers: [
        CommentService
    ]
})
export class CommentSharedModule { }