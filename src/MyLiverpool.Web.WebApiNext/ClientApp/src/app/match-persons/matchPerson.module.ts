import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SharedModule } from '@app/shared';
import { MatchPersonEditPanelComponent } from './matchPerson-edit-panel';
import { MatchPersonService } from './matchPerson.service';
import { MatchPersonPanelComponent } from './matchPerson-panel';
import { PersonEditModule } from '@persons/shared';

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
