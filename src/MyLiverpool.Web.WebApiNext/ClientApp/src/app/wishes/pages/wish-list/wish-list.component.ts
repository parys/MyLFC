import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

import { merge, of, Observable } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

import { Wish, WishFilter, PagedList } from '@domain/models';
import { WishService } from '@wishes/wish.service';
import { WISHES_ROUTE } from '@constants/routes.constants';
import { PAGE } from '@constants/help.constants';
import { AuthState } from '@auth/store';
import { Select } from '@ngxs/store';
import { ObserverComponent } from '@domain/base';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';

@Component({
    selector: 'wish-list',
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent extends ObserverComponent implements AfterViewInit {
    public items: Wish[];
    public stateId: number;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Select(AuthState.isAdmin) isAdmin$: Observable<boolean>;

    constructor(private service: WishService,
                private location: Location,
                private route: ActivatedRoute,
                private notifier: NotifierService) {
        super();
    }


    public ngAfterViewInit(): void {
        this.route.queryParams.subscribe(qParams => {
            this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
            this.paginator.pageSize = +qParams['itemsPerPage'] || 15;
            this.stateId = +qParams['stateId'];

        });

        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: PagedList<Wish>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
            ).subscribe((data: Wish[]) => {
                this.items = data;
                this.updateUrl();
            });
    }

    public updateUrl(): void {
        const newUrl = `${WISHES_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}`;
        this.location.replaceState(newUrl);
    }

    public update(): Observable<PagedList<Wish>> {
        const filters = new WishFilter();
        filters.stateId = this.stateId;
        filters.pageSize = this.paginator.pageSize;
        filters.currentPage = this.paginator.pageIndex + 1;

        return this.service.getAll(filters);
    }

    public getTypeClass(i: number): string {
        switch (i) {
            case 1:
                return 'panel-danger';
            case 2:
                return 'panel-success';
            case 3:
                return 'panel-info';
            case 4:
                return 'panel-primary';
            default:
                return '';
        }
    }

    public showDeleteModal(index: number): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
        .subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
        this.subscriptions.push(sub$);
    }

    private delete(index: number): void {
        this.service.delete(this.items[index].id)
            .subscribe((res: boolean) => {
                if (res) {
                    this.items.splice(index, 1);
                    this.paginator.length -= 1;
                }
            });
    }
}
