import { NgModule } from "@angular/core";
import { MdButtonModule, MdDatepickerModule, MdInputModule, MdAutocompleteModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { NgxPaginationModule } from "ngx-pagination";
import { MatchEditComponent } from "./match-edit/index";
import { MatchListComponent } from "./match-list/index";
import { MatchCalendarComponent } from "./match-calendar/index";
import { MatchDetailComponent } from "./match-detail/index";
import { MatchService } from "./match.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Ng2AutoCompleteModule,
        NgxPaginationModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdDatepickerModule,
        MdInputModule,
        ReactiveFormsModule,
        RouterModule
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