import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

import { merge, of, Observable } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

import { Match, MatchFilters, PagedList } from '@domain/models';
import {  MATCHES_ROUTE } from '@constants/routes.constants';

import { MatchService } from '@matches/match.service';
import { PAGE } from '@constants/help.constants';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';
import { ObserverComponent } from '@domain/base';

@Component({
    selector: 'match-list',
    templateUrl: './match-list.component.html',
    styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent extends ObserverComponent implements AfterViewInit {

    public items: Match[];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private matchService: MatchService,
                private route: ActivatedRoute,
                private location: Location,
                private notifier: NotifierService) {
                    super();
    }

    public ngAfterViewInit(): void {
        this.route.queryParams.subscribe(qParams => {
                this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
                this.paginator.pageSize = 15;
            });

        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: PagedList<Match>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
        ).subscribe((data: Match[]) => {
                    this.items = data;
                    this.updateUrl();
                });
    }

    public update(): Observable<PagedList<Match>> {
        const filters = new MatchFilters();
       // todo add input to filter? filters.seasonId = this.categoryId;
        filters.pageSize = this.paginator.pageSize;
        filters.currentPage = this.paginator.pageIndex + 1;

        return this.matchService
            .getAll(filters);
    }

    public updateUrl(): void {
        const newUrl = `${MATCHES_ROUTE}?${PAGE}=${this.paginator.pageIndex}`;
        this.location.replaceState(newUrl);
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
        this.matchService.delete(this.items[index].id)
            .subscribe((res: boolean) => {
                    if (res) {
                        this.items.splice(index, 1);
                    }
                });
    }
}
