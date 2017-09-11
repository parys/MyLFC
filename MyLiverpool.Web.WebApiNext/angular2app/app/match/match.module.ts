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
import { MatchEventModule } from "../matchEvent/matchEvent.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdDatepickerModule,
        MdInputModule,
        MatchEventModule,
        ReactiveFormsModule,
        RouterModule.forRoot(matchRoutes)
    ],
    declarations: [
        MatchEditComponent,
        MatchListComponent,
        MatchCalendarComponent,
        MatchDetailComponent,
    ],
    providers: [
        MatchService,
    ],
    exports: [
        MatchCalendarComponent
    ]
})
export class MatchModule { }  