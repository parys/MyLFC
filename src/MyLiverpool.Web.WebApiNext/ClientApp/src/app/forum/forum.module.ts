import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from '@editor/index';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '@base/pipes';

import { ForumSectionListComponent, ForumSectionService } from '@forum/forumSection';
import * as forumSubsection from '@forum/forumSubsection';
import * as forumMessage from '@forum/forumMessage';
import * as forumTheme from '@forum/forumTheme';
import { forumRoutes } from '@forum/forum.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EditorModule,
        NgxPaginationModule,
        RouterModule.forChild(forumRoutes),
        PipesModule
    ],
    declarations: [
        forumMessage.ForumMessageAdditionComponent,
        forumSubsection.ForumSubsectionEditComponent,
        forumSubsection.ForumSubsectionListComponent,
        forumTheme.ForumThemeEditComponent,
        forumTheme.ForumThemeListComponent,
        ForumSectionListComponent
    ],
    exports: [
    ],
    providers: [
        forumMessage.ForumMessageService,
        forumSubsection.ForumSubsectionService,
        forumTheme.ForumThemeService,
        ForumSectionService
    ]
})
export class ForumModule { }
