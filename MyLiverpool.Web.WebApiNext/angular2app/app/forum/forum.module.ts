import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ForumSectionListComponent, ForumSectionService } from "./forumSection/index";
import * as forumSubsection from "./forumSubsection/index";
import * as forumMessage from "./forumMessage/index";
import * as forumTheme from "./forumTheme/index";
import { forumRoutes } from "./forum.routes";
import { EditorModule } from "../editor/index";
import { PaginationModule } from "ng2-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        EditorModule,
        PaginationModule.forRoot(),
        RouterModule.forRoot(forumRoutes)
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