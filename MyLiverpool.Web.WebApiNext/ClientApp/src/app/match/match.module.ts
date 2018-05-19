import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { MatchEditComponent } from "./match-edit";
import { MatchListComponent } from "./match-list";
import { MatchCalendarComponent } from "./match-calendar";
import { MatchDetailComponent } from "./match-detail";
import { MatchService } from "./match.service";
import { matchRoutes } from "./match.routes";
import { MatchEventModule } from "@app/matchEvent";
import { MatchPersonModule } from "@app/matchPerson";
import { CommentModule } from "@app/comment";
import { MatchHeaderComponent } from "./match-header";
import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
        CommonModule,
        CommentModule,
        SharedModule,
        NgxPaginationModule,
        MatchEventModule,
        MatchPersonModule,
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