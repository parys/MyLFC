import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RolesCheckedService } from '@base/auth';

@Component({
    selector: 'admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminHomeComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public cupTable: string;

    constructor(public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {}

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }
}
