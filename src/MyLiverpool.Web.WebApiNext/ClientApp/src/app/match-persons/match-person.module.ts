import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PersonEditModule } from '@persons/shared';
import { SelectPersonFormFieldModule } from '@widgets/http/select-person-form-field';

import { MatchPersonEditPanelComponent } from '@match-persons/components/matchPerson-edit-panel';
import { MatchPersonService } from '@match-persons/match-person.service';
import { MatchPersonPanelComponent } from '@match-persons/components/matchPerson-panel';
import { MatchPersonMaterialModule } from '@match-persons/match-person-material.module';
import { MatchPersonInfoComponent } from '@match-persons/components/match-person-info';
import { NgxsModule } from '@ngxs/store';
import { MatchPersonsState } from './store';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PersonEditModule,
        SelectPersonFormFieldModule,
        MatchPersonMaterialModule,
        NgxsModule.forFeature([MatchPersonsState])
    ],
    declarations: [
        MatchPersonEditPanelComponent,
        MatchPersonPanelComponent,
        MatchPersonInfoComponent
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
