import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Notification } from '@domain/models';
import { RolesCheckedService } from '@base/auth';
import { SignalRService } from '@base/signalr';
import { CustomTitleMetaService } from '@shared/index';
import { NOTIFICATIONS_ROUTE } from '@constants/routes.constants';
import { LayoutService } from '@layout/layout.service';

@Component({
    selector: 'notification-counter',
    templateUrl: './notification-counter.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class NotificationCounterComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private action = 'Перейти';
    public count = 0;

    constructor(private service: LayoutService,
                public roles: RolesCheckedService,
                private signalR: SignalRService,
                private router: Router,
                private titleService: CustomTitleMetaService,
                private cd: ChangeDetectorRef,
                private snackBar: MatSnackBar) { }

    public ngOnInit(): void {
        this.updateCount();

        this.signalR.readNotify.subscribe((data: number) => {
            this.count -= data;
            this.cd.markForCheck();
            this.titleService.removeCount(data);
            });
        this.signalR.newNotify.subscribe((data: Notification) => {
                this.count++;
                this.titleService.addCount(1);
                this.snackBar.open('Новое уведомление', this.action)
                    .onAction()
                    .subscribe(_ => {
                        this.service.read(([data.id]))
                        .subscribe(() => this.router.navigate([`/${data.typeName}/${data.entityId}`], { fragment: data.commentId ? `com${data.commentId}` : '' }));
                    });

                this.cd.markForCheck();
        });
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    private updateCount() {
        this.sub = this.service.getUnreadNotificationsCount()
            .subscribe((data: number) => {
                    this.count = data;
                    if (this.count > 0) {
                        this.titleService.addCount(this.count);
                        this.snackBar.open('Есть новые уведомления', this.action)
                            .onAction()
                            .subscribe(_ => this.router.navigate([NOTIFICATIONS_ROUTE]));
                    }
                },
                null,
                () => {
                    this.cd.markForCheck();
                });
    }
}
