import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';

import { Subscription, merge, of, Observable } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

import { TransferService } from '@transfers/transfer.service';
import { Transfer, TransferFilters, PagedList } from '@domain/models';
import { TRANSFERS_ROUTE } from '@constants/routes.constants';
import { PAGE } from '@constants/help.constants';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';
import { ObserverComponent } from '@domain/base';

@Component({
    selector: 'transfer-list',
    templateUrl: './transfer-list.component.html'
})
export class TransferListComponent extends ObserverComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: Transfer[];
    displayedColumns = ['personName', 'clubName', 'startDate', 'onLoan', 'amount'];

    @ViewChild(MatSort, { static: true })sort: MatSort;
    @ViewChild(MatPaginator, { static: true })paginator: MatPaginator;

    constructor(private service: TransferService,
                private route: ActivatedRoute,
                private location: Location,
                private snackBar: MatSnackBar,
                private notifier: NotifierService) {
                    super();
    }

    public ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe(qParams => {
            this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
            this.paginator.pageSize = +qParams['itemsPerPage'] || 15;
        });

        merge(this.sort.sortChange,
                this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
            map((data: PagedList<Transfer>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
            ).subscribe(data => {
                    this.items = data;
                    this.updateUrl();
                });
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }


    public update(): Observable<PagedList<Transfer>> {
        const filters = new TransferFilters();
        filters.currentPage = this.paginator.pageIndex + 1;
        filters.pageSize = this.paginator.pageSize || 10;
        filters.sortOn = this.sort.active;
        filters.sortDirection = this.sort.direction;

        return this.service
            .getAll(filters);
    }

    public updateUrl(): void {
        const newUrl = `${TRANSFERS_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}`;
        this.location.replaceState(newUrl);
    }

    public showDeleteModal(id: number): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
        .subscribe(result => {
            if (result) {
                this.delete(id);
            }
        });
        this.subscriptions.push(sub$);
    }

    private delete(id: number): void {
        this.service.delete(id)
            .subscribe(res => {
                if (res) {
                    this.snackBar.open('Удален');
                    } else {
                        this.snackBar.open('Ошибка удаления');
                    }
                });
    }
}
