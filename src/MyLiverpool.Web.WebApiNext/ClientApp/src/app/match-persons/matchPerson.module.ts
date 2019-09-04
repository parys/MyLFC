import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SharedModule } from '@shared/index';
import { PersonEditModule } from '@persons/shared';

import { MatchPersonEditPanelComponent } from '@match-persons/matchPerson-edit-panel';
import { MatchPersonService } from '@match-persons/matchPerson.service';
import { MatchPersonPanelComponent } from '@match-persons/matchPerson-panel';
import { SelectPersonFormFieldModule } from '@widgets/http/select-person-form-field';

@NgModule({
    imports: [
        SharedModule,
        PersonEditModule,
        MatSelectModule,
        MatCheckboxModule,
        SelectPersonFormFieldModule
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
