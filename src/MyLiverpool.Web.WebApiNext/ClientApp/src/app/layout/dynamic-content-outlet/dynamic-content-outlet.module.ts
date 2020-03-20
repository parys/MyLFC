import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicContentOutletErrorComponent } from './dynamic-content-outlet-error.component';
import { DynamicContentOutletComponent } from './dynamic-content-outlet.component';
import { DynamicContentOutletService } from './dynamic-content-outlet.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DynamicContentOutletComponent,
    DynamicContentOutletErrorComponent
  ],
  exports: [DynamicContentOutletComponent],
  providers: [
    DynamicContentOutletService
  ],
  entryComponents: [
    DynamicContentOutletComponent,
    DynamicContentOutletErrorComponent
  ]
})
export class DynamicContentOutletModule {

}
