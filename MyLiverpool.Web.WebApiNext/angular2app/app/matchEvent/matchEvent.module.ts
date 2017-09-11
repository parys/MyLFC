import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdButtonModule, MdCheckboxModule, MdAutocompleteModule, MdSelectModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/index";
import { matchEventRoutes } from "./matchEvent.routes";
import { MatchEventEditPanelComponent } from "./matchEvent-edit-panel/index";
import { MatchEventListComponent } from "./matchEvent-list.component";
import { MatchEventService } from "./matchEvent.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
     //   MdCheckboxModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdInputModule,
        MdSelectModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        RouterModule.forRoot(matchEventRoutes),
        SharedModule
    ],
    declarations: [
        MatchEventEditPanelComponent,
        MatchEventListComponent
    ],
    exports: [
        MatchEventEditPanelComponent
    ],
    providers: [
        MatchEventService
    ]
})
export class MatchEventModule { }