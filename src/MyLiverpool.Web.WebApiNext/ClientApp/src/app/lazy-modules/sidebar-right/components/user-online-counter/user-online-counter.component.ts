﻿import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

import { IUserOnline, UsersOnline } from '@domain/models';
import { SignalRService } from '@base/signalr';

import { SidebarRightService } from '@lazy-modules/sidebar-right/sidebar-right.service';

const USER_ONLINE_KEY = makeStateKey<UsersOnline>('user-online');

@Component({
    selector: 'user-online-counter',
    templateUrl: './user-online-counter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserOnlineCounterComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public allCount = 0;
    public guestCount = 0;
    public users: IUserOnline[] = new Array();

    constructor(private service: SidebarRightService,
                private cd: ChangeDetectorRef,
                private transferState: TransferState,
                private signalRService: SignalRService) { }

    public ngOnInit(): void {
        this.updateCount();
        this.signalRService.onlineSubject
            .subscribe((data: UsersOnline) => this.parse(data));
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    private updateCount() {
        const savedData = this.transferState.get(USER_ONLINE_KEY, null);
        if (savedData) {
            this.parse(savedData);
        } else {
            this.sub = this.service.getOnlineCount()
                .subscribe(data => {
                        this.parse(data);
                        this.transferState.set(USER_ONLINE_KEY, data);
                    });
        }
    }

    private parse(data: UsersOnline): void {
        this.allCount = data.allCount;
        this.guestCount = data.guestCount;
        this.users = data.users;
        this.cd.markForCheck();
    }
}
