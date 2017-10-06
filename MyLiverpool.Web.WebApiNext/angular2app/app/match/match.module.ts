import { NgModule } from "@angular/core";
import { MdButtonModule, MdDatepickerModule, MdInputModule, MdAutocompleteModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { MatchEditComponent } from "./match-edit/index";
import { MatchListComponent } from "./match-list/index";
import { MatchCalendarComponent } from "./match-calendar/index";
import { MatchDetailComponent } from "./match-detail/index";
import { MatchService } from "./match.service";
import { matchRoutes } from "./match.routes";
import { MatchEventModule } from "@app/matchEvent";
import { MatchPersonModule } from "@app/matchPerson";
import { CommentModule } from "@app/comment";
import { MatchHeaderComponent } from "./match-header/index";
import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
        CommonModule,
        CommentModule,
        FormsModule,
        SharedModule,
        NgxPaginationModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdDatepickerModule,
        MdInputModule,
        MatchEventModule,
        MatchPersonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(matchRoutes)
    ],
    declarations: [
        MatchEditComponent,
        MatchListComponent,
        MatchCalendarComponent,
        MatchDetailComponent,
        MatchHeaderComponent,
    ],
    providers: [
        MatchService,
    ],
    exports: [
        MatchCalendarComponent,
        MatchHeaderComponent
    ]
})
export class MatchModule { }  