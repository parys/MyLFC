import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdButtonModule, MdAutocompleteModule, MdSelectModule, MdSlideToggleModule, MdCheckboxModule, MdIconModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/index";
import { commentRoutes } from "./comment.routes";
import { CommentService } from "./comment.service";
import { CommentDetailComponent } from "./comment-detail/index";
import { CommentListComponent } from "./comment-list/index";
import { CommentSectionComponent } from "./comment-section/index";
import { CommentLastComponent } from "./comment-last/index";
import { EditorModule } from "../editor/index";

@NgModule({
    imports: [
        CommonModule,
        EditorModule,
        FormsModule,
        MdSlideToggleModule,
        MdIconModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdSelectModule,
        NgxPaginationModule,
        ReactiveFormsModule,
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