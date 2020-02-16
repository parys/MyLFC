import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdComponent } from './od';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        OdComponent,
    ],
    exports: [
        OdComponent,
    ],
    providers: [
   //     { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    ]
})
export class OdModule { }
