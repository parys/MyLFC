import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { SelectClubFormFieldComponent } from './select-club-form-field/select-club-form-field.component';
import { ClubService } from '@clubs/club.service'; // todo temporary
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [SelectClubFormFieldComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    exports: [
        SelectClubFormFieldComponent
    ],
    providers: [
        ClubService
    ]
})
export class SelectClubFormFieldModule { }
