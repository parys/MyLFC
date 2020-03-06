import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

import { Match, MatchCalendar } from '@domain/models';
import { SidebarLeftService } from '@lazy-modules/sidebar-left/sidebar-left.service';

const MATCH_CALENDAR_KEY = makeStateKey<Match[]>('match-calendar');

@Component({
    selector: 'match-calendar',
    templateUrl: './match-calendar.component.html',
    styleUrls: ['./match-calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchCalendarComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public last: Match;
    public next: Match;

    constructor(private service: SidebarLeftService,
                private transferState: TransferState,
                private cd: ChangeDetectorRef) { }

    public ngOnInit(): void {
        const savedData = this.transferState.get(MATCH_CALENDAR_KEY, null);
        if (savedData) {
            this.parse(savedData);
        } else {
            this.sub = this.service.getForCalendar().subscribe(data => {
                this.parse(data);
                this.transferState.set(MATCH_CALENDAR_KEY, data);
            });
        }
    }
    private parse(matches: MatchCalendar): void {
        this.last = matches.last;
        this.next = matches.next;
        this.cd.markForCheck();
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }
}
