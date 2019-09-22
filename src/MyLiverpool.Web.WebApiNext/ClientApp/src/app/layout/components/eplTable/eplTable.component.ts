import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { HelperType } from '@domain/models';
import { ObserverComponent } from '@domain/base';
import { RolesCheckedService } from '@base/auth';

import { LayoutService } from '@layout/layout.service';

@Component({
    selector: 'epl-table',
    templateUrl: './eplTable.component.html',
    styleUrls: ['./eplTable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EplTableComponent extends ObserverComponent {
    public eplTable: string;
    public opened = false;

    constructor(private service: LayoutService,
                private cd: ChangeDetectorRef,
                public roles: RolesCheckedService) {
        super();
    }

    public open(): void {
        this.opened = !this.opened;
        if (this.opened) {
            this.init();
        }
    }

    private init() {
        const sub$ = this.service
        .getValue(HelperType.EplTable)
        .subscribe((data: string) => this.eplTable = data,
            null,
            () => {
                this.cd.markForCheck();
            });
        this.subscriptions.push(sub$);
    }

    public updateEplTable(): void {
        const sub$ = this.service
            .updateEplTable()
            .subscribe((data: string) => {
                this.eplTable = data;
                this.cd.markForCheck();
            });
        this.subscriptions.push(sub$);
    }
}
