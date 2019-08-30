import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { SharedModule } from '@app/shared';
import { PersonEditComponent } from './person-edit';
import { PersonService } from '../person.service';


@NgModule({
    imports: [
        SharedModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule
    ],
    declarations: [
        PersonEditComponent
    ],
    exports: [
        PersonEditComponent,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule
    ],
    providers: [
        PersonService
    ]
})
export class PersonEditModule { }
