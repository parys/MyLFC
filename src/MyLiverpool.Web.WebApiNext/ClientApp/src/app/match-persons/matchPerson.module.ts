import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SharedModule } from '@shared/index';
import { PersonEditModule } from '@persons/shared';

import { MatchPersonEditPanelComponent } from '@match-persons/matchPerson-edit-panel';
import { MatchPersonService } from '@match-persons/matchPerson.service';
import { MatchPersonPanelComponent } from '@match-persons/matchPerson-panel';

@NgModule({
    imports: [
        SharedModule,
        PersonEditModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatCheckboxModule
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
