import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared";
import { MatchEventEditPanelComponent } from "./matchEvent-edit-panel";
import { MatchEventService } from "./matchEvent.service";
import { MatchEventMatchPanelComponent } from "./matchEvent-match-panel";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
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