import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

import { CoreState } from '@core/store';

@Component({
    selector: 'notification-counter',
    templateUrl: './notification-counter.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class NotificationCounterComponent  {

    @Select(CoreState.notificationsCount) notificationsCount$: Observable<number>;

    constructor() { }
}
