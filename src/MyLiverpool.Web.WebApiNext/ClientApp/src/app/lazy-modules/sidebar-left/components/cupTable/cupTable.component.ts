import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Subscription, Observable } from 'rxjs';

import { HelperType } from '@domain/models';

import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { SidebarLeftService } from '@lazy-modules/sidebar-left/sidebar-left.service';

const CUP_TABLE_KEY = makeStateKey<string>('cup-table');

@Component({
    selector: 'cup-table',
    templateUrl: './cupTable.component.html',
    styleUrls: ['./cupTable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CupTableComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public cupTable: string;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private service: SidebarLeftService,
                private cd: ChangeDetectorRef,
                private transferState: TransferState) {
    }

    public ngOnInit(): void {
        const savedData = this.transferState.get(CUP_TABLE_KEY, null);
        if (savedData) {
            this.parse(savedData);
        } else {
            this.sub = this.service
                .getValue(HelperType.CupTable)
                .subscribe(data => {
                    this.parse(data);
                    this.transferState.set(CUP_TABLE_KEY, data);
                });
        }
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    private parse(data: string): void {
        this.cupTable = data;
        this.cd.markForCheck();
    }
}
