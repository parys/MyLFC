import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdButtonModule, MdAutocompleteModule, MdSelectModule, MdSlideToggleModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/index";
import { materialCommentRoutes } from "./materialComment.routes";
import { MaterialCommentService } from "./materialComment.service";
import { MaterialCommentDetailComponent } from "./materialComment-detail/index";
import { MaterialCommentListComponent } from "./materialComment-list/index";
import { CommentSectionComponent } from "./materialComment-section/index";
import { LastCommentsComponent } from "./last-comments/index";
import { EditorModule } from "../editor/index";

@NgModule({
    imports: [
        CommonModule,
        EditorModule,
        FormsModule,
        MdSlideToggleModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdInputModule,
        MdSelectModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        RouterModule.forRoot(materialCommentRoutes),
        SharedModule
    ],
    declarations: [
        MaterialCommentDetailComponent,
        MaterialCommentListComponent,
        CommentSectionComponent,
        LastCommentsComponent,
    ],
    exports: [
        CommentSectionComponent,
        LastCommentsComponent
    ],
    providers: [
        MaterialCommentService
    ]
})
export class CommentModule { }