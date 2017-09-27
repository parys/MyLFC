import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdButtonModule, MdAutocompleteModule, MdSelectModule, MdSlideToggleModule, MdIconModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/index";
import { matchEventRoutes } from "./matchEvent.routes";
import { MatchEventEditPanelComponent } from "./matchEvent-edit-panel/index";
import { MatchEventListComponent } from "./matchEvent-list.component";
import { MatchEventService } from "./matchEvent.service";
import { MatchEventMatchPanelComponent } from "./matchEvent-match-panel/index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdSlideToggleModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule,
        MdSelectModule,
        NgxPaginationModule,
        ReactiveFormsModule,
      //  RouterModule.forRoot(matchEventRoutes),
        SharedModule
    ],
    declarations: [
        MatchEventEditPanelComponent,
        MatchEventMatchPanelComponent,
        MatchEventListComponent
    ],
    exports: [
        MatchEventEditPanelComponent,
        MatchEventMatchPanelComponent
    ],
    providers: [
        MatchEventService
    ]
})
export class MatchEventModule { }