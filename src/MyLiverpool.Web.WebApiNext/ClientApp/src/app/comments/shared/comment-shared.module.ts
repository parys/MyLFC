import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '@shared/index';
import { EditorModule } from '@editor/index';
import { PipesModule } from '@base/pipes';

import { CommentService } from '@comments/comment.service';
import { CommentDetailComponent } from '@comments/shared/comment-detail';
import { CommentSectionComponent } from '@comments/shared/comment-section';

@NgModule({
    imports: [
        SharedModule,
        EditorModule,
        RouterModule,
        PipesModule,
        MatIconModule,
        MatButtonModule
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
