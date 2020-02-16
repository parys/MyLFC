import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { Select } from '@ngxs/store';
import { CoreState } from '@core/store';

@Component({
    selector: 'pm-counter',
    templateUrl: './pm-counter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PmCounterComponent {

    @Select(CoreState.pmsCount) pmsCount$: Observable<number>;

    constructor() {
    }
}
