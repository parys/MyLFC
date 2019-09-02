import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { SharedModule } from '@shared/index';



@NgModule({
    imports: [
        SharedModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        
    ]
})
export class HttpWidgetsModule { }
