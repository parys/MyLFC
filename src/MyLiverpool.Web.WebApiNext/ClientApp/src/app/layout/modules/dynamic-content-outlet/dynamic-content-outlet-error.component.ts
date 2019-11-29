import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content-outlet-error-component',
  template: `
    <div>{{ errorMessage }}444</div>
  `
})
export class DynamicContentOutletErrorComponent {
  @Input() errorMessage: string;
  constructor() {}
}
