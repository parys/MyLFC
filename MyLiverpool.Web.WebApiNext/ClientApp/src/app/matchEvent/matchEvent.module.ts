import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "@app/shared";
import { MatchEventEditPanelComponent } from "./matchEvent-edit-panel";
import { MatchEventListComponent } from "./matchEvent-list.component";
import { MatchEventService } from "./matchEvent.service";
import { MatchEventMatchPanelComponent } from "./matchEvent-match-panel";

@NgModule({
    imports: [
        CommonModule,
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