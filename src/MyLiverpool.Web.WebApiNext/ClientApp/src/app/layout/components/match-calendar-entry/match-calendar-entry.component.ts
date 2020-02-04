import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Match } from '@domain/models';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'match-calendar-entry',
    templateUrl: './match-calendar-entry.component.html',
    styleUrls: ['./match-calendar-entry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchCalendarEntryComponent {
    @Input() public match: Match;
    @Input() public name: string;
    @Input() public next: boolean;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;
}
