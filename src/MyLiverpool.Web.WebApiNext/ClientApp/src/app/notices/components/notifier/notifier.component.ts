import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { Actions, ofActionSuccessful } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { ShowNotice } from '@notices/store';
import { ObserverComponent } from '@domain/base';
import { NoticeMessage } from '@notices/shared/notice-message.model';
import { NoticeComponent } from '@notices/components/notice/notice.component';


@Component({
    selector: 'notifier',
    templateUrl: './notifier.component.html',
    styleUrls: ['./notifier.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifierComponent extends ObserverComponent implements OnInit {

    constructor(private snackBar: MatSnackBar, private actions$: Actions) {
        super();
    }

    public ngOnInit(): void {
        this.subscriptions.push(this.subscribeOnShowNotification());
    }

    private subscribeOnShowNotification(): Subscription {
        return this.actions$.pipe(ofActionSuccessful(ShowNotice))
            .subscribe(({ payload }: ShowNotice) => { this.notify(payload); });
    }

    public notify(message: NoticeMessage, customConfig: MatSnackBarConfig = {}): void {
        this.snackBar.openFromComponent(NoticeComponent, { ...customConfig, data: { ...message } });
    }
}
