import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "@app/shared";
import { MatchPersonEditPanelComponent } from "./matchPerson-edit-panel/index";
import { MatchPersonService } from "./matchPerson.service";
import { MatchPersonPanelComponent } from "./matchPerson-panel/index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        MatchPersonEditPanelComponent,
        MatchPersonPanelComponent
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