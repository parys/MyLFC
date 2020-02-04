import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { TransferService } from '@transfers/transfer.service';
import { Transfer } from '@domain/models';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';

@Component({
    selector: 'transfer-current-list',
    templateUrl: './transfer-current-list.component.html',
    styleUrls: ['./transfer-current-list.component.scss']
})
export class TransferCurrentListComponent implements OnInit, OnDestroy {
    private sub2: Subscription;
    public comeIn: Transfer[];
    public comeOut: Transfer[];
    public totalIn = 0;
    public totalOut = 0;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private service: TransferService) {
    }

    public ngOnInit(): void {
        this.update();
    }

    public ngOnDestroy(): void {
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

    public update(): void {
        this.sub2 = this.service
            .getCurrentAll()
            .subscribe((data: any) => this.parseList(data.results));
    }

    private parseList(list: Transfer[]): void {
        this.comeIn = list.filter(x => x.coming);
        this.comeOut = list.filter(x => !x.coming);
        this.comeIn.forEach(elem => this.totalIn += elem.amount);
        this.comeOut.forEach(elem => this.totalOut += elem.amount);
    }
}
