import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { EditorModule } from '@editor/index';
import { PipesModule } from '@base/pipes';

import { CommentService } from '@comments/comment.service';
import { CommentDetailComponent } from '@comments/shared/comment-detail';
import { CommentSectionComponent } from '@comments/shared/comment-section';
import { SharedModule } from '@shared/index';

@NgModule({
    imports: [
        CommonModule,
        SharedModule, // the ad component
        EditorModule,
        RouterModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        CommentDetailComponent,
        CommentSectionComponent
    ],
    exports: [
        CommentSectionComponent,
        CommentDetailComponent
    ],
    providers: [
        CommentService
    ]
})
export class CommentSharedModule { }
