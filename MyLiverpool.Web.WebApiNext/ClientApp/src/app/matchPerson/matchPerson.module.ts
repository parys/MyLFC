import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { MatchPersonEditPanelComponent } from "./matchPerson-edit-panel";
import { MatchPersonService } from "./matchPerson.service";
import { MatchPersonPanelComponent } from "./matchPerson-panel";
import { PersonModule } from "@app/person";

@NgModule({
    imports: [
        SharedModule,
        PersonModule
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