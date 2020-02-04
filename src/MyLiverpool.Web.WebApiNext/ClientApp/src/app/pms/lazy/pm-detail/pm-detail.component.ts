import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription, Observable } from 'rxjs';

import { PmService } from '@pms/pm.service';
import { Pm } from '@domain/models';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';

@Component({
    selector: 'pm-detail',
    templateUrl: './pm-detail.component.html',
    styleUrls: ['./pm-detail.component.scss']
})

export class PmDetailComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public item: Pm;
    public selectedUserId: number;
    public selectedUserName: string;

    @Select(AuthState.userId) userId$: Observable<number>;

    constructor(private pmService: PmService,
                private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.sub2 = this.pmService.getSingle(+params['id'])
                .subscribe(data => this.item = data);
        });
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

    public writePm(isSelf: boolean): void {
        if (isSelf) {
            this.selectedUserId = this.item.receiverId;
            this.selectedUserName = this.item.receiver;
        } else {
            this.selectedUserId = this.item.senderId;
            this.selectedUserName = this.item.sender;
        }
    }

    public closePmWindow(event: any): void {
        this.selectedUserId = null;
    }
}
