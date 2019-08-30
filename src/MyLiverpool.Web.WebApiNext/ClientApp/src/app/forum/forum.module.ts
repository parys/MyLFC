import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ForumSectionListComponent, ForumSectionService } from './forumSection';
import * as forumSubsection from './forumSubsection';
import * as forumMessage from './forumMessage';
import * as forumTheme from './forumTheme';
import { forumRoutes } from './forum.routes';
import { EditorModule } from '@app/editor';
import { SharedModule } from '@app/shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '@base/pipes';

@NgModule({
    imports: [
        CommonModule,
        EditorModule,
        NgxPaginationModule,
        RouterModule.forChild(forumRoutes),
        SharedModule,
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
