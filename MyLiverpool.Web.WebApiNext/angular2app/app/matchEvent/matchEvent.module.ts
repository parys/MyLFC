﻿import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "@app/shared";
import { matchEventRoutes } from "./matchEvent.routes";
import { MatchEventEditPanelComponent } from "./matchEvent-edit-panel/index";
import { MatchEventListComponent } from "./matchEvent-list.component";
import { MatchEventService } from "./matchEvent.service";
import { MatchEventMatchPanelComponent } from "./matchEvent-match-panel/index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        ReactiveFormsModule,
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