import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdButtonModule, MdAutocompleteModule, MdSelectModule, MdSlideToggleModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/index";
import { MatchPersonEditPanelComponent } from "./matchPerson-edit-panel/matchPerson-edit-panel.component";
import { MatchPersonService } from "./matchPerson.service";
import { MatchPersonPanelComponent } from "./matchPerson-panel/matchPerson-panel.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdSlideToggleModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdInputModule,
        MdSelectModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        //      RouterModule.forRoot(matchEventRoutes),
        SharedModule
    ],
    declarations: [
        MatchPersonEditPanelComponent,
        MatchPersonPanelComponent,
        //    MatchEventListComponent
    ],
    exports: [
        MatchPersonEditPanelComponent,
        MatchPersonPanelComponent
    ],
    providers: [
        MatchPersonService
    ]
})
export class MatchPersonModule { }