import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared";
import { MatchEventEditPanelComponent } from "./matchEvent-edit-panel";
import { MatchEventService } from "./matchEvent.service";
import { MatchEventMatchPanelComponent } from "./matchEvent-match-panel";
import { MatSelectModule, MatAutocompleteModule, MatSlideToggleModule } from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatSlideToggleModule
    ],
    declarations: [
        MatchEventEditPanelComponent,
        MatchEventMatchPanelComponent
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