import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { SelectPersonFormFieldComponent } from './select-person-form-field/select-person-form-field.component';
import { PersonService } from '@persons/person.service'; // todo temporary
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [SelectPersonFormFieldComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    exports: [
        SelectPersonFormFieldComponent
    ],
    providers: [
        PersonService
    ]
})
export class SelectPersonFormFieldModule { }
