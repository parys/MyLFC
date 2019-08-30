import { NgModule } from '@angular/core';
import { SafePipe } from './safe.pipe';
import { CustomDatePipe } from './date.pipe';

@NgModule({
    imports: [
      //  CommonModule,
    ],
    declarations: [
        CustomDatePipe,
        SafePipe,
    ],
    exports: [
        CustomDatePipe,
        SafePipe,
    ]
})
export class PipesModule { }
