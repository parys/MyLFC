import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Subscription, Observable } from 'rxjs';

import { Injury } from '@domain/models';

import { SidebarLeftService } from '@lazy-modules/sidebar-left/sidebar-left.service';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';

const INJURY_CURRENT_KEY = makeStateKey<Injury[]>('injury-current');

@Component({
    selector: 'injury-current-list',
    templateUrl: './injury-current-list.component.html',
    styleUrls: ['./injury-current-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InjuryCurrentListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: Injury[];

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;

    constructor(private service: SidebarLeftService,
                private transferState: TransferState,
                private cd: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        const savedData = this.transferState.get(INJURY_CURRENT_KEY, null);
        if (savedData) {
            this.items = savedData;
            this.cd.markForCheck();
        } else {
            this.sub = this.service.getCurrentInjuries().subscribe(data => {
                    this.items = data;
                    this.transferState.set(INJURY_CURRENT_KEY, data);
                },
                null,
                () => {
                    this.cd.markForCheck();
                });
        }
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }
}
