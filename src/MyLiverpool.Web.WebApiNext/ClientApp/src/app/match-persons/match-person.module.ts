import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/index';
import { PersonEditModule } from '@persons/shared';
import { SelectPersonFormFieldModule } from '@widgets/http/select-person-form-field';

import { MatchPersonEditPanelComponent } from '@match-persons/matchPerson-edit-panel';
import { MatchPersonService } from '@match-persons/match-person.service';
import { MatchPersonPanelComponent } from '@match-persons/matchPerson-panel';
import { MatchPersonMaterialModule } from '@match-persons/match-person-material.module';

@NgModule({
    imports: [
        SharedModule,
        PersonEditModule,
        SelectPersonFormFieldModule,
        MatchPersonMaterialModule,
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
