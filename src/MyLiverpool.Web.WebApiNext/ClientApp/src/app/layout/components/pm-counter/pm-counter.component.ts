import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { SignalRService } from '@app/+signalr';
import { CustomTitleMetaService as CustomTitleService } from '@app/shared';
import { PMS_ROUTE } from '@app/+constants';
import { Pm } from '@domain/models';
import { LayoutService } from '@layout/layout.service';

@Component({
    selector: 'pm-counter',
    templateUrl: './pm-counter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PmCounterComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public count = 0;
    private action = 'Перейти';

    constructor(private service: LayoutService,
                private snackBar: MatSnackBar,
                private signalR: SignalRService,
                private cd: ChangeDetectorRef,
                private titleService: CustomTitleService,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.updateCount();

        this.signalR.readPm.subscribe(() => {
            this.count--;
            this.titleService.removeCount(1);
            this.cd.markForCheck();
        });
        this.signalR.newPm.subscribe((data: Pm) => {
            this.count++;
            this.titleService.addCount(1);
            this.snackBar.open('Новое сообщение', this.action)
                .onAction()
                .subscribe(_ => this.router.navigate([PMS_ROUTE, data.id]));
            this.cd.markForCheck();
        });
    }

    public ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    private updateCount() {
        this.sub = this.service.getUnreadPmsCount()
            .subscribe((data: number) => {
                this.count = data;
                if (this.count > 0) {
                    this.titleService.addCount(this.count);
                    this.snackBar
                        .open('Есть новые сообщения', this.action)
                        .onAction()
                        .subscribe(() => this.router.navigate([PMS_ROUTE]));
                }
            },
                null,
                () => this.cd.markForCheck());
    }
}
