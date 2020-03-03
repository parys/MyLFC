import { Component, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

import { merge, of, fromEvent, Observable, Subscription } from 'rxjs';
import { startWith, switchMap, map, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Injury, InjuryFilters, PagedList } from '@domain/models';
import { InjuryService } from '@injuries/injury.service';
import { DEBOUNCE_TIME } from '@constants/app.constants';
import { PAGE, KEYUP } from '@constants/help.constants';
import { INJURIES_ROUTE } from '@constants/routes.constants';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';
import { ObserverComponent } from '@domain/base';

@Component({
    selector: 'injury-list',
    templateUrl: './injury-list.component.html'
})

export class InjuryListComponent extends ObserverComponent implements AfterViewInit, OnDestroy {
    private sub: Subscription;
    public items: Injury[];
    displayedColumns = ['personName', 'startTime', 'endTime', 'description', 'tool'];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('nameInput') nameInput: ElementRef;

    constructor(private injuryService: InjuryService,
        private route: ActivatedRoute,
        private location: Location,
        private notifier: NotifierService) {
        super();
    }

    public ngAfterViewInit(): void {
        this.sub = this.route.queryParams.subscribe(qParams => {
            this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
        });

        merge(this.sort.sortChange,
            fromEvent(this.nameInput.nativeElement, KEYUP)
                .pipe(debounceTime(DEBOUNCE_TIME),
                    distinctUntilChanged()))
            .subscribe(() => this.paginator.pageIndex = 0);


        merge(this.sort.sortChange, this.paginator.page, fromEvent(this.nameInput.nativeElement, KEYUP)
            .pipe(debounceTime(DEBOUNCE_TIME),
                distinctUntilChanged()))
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: PagedList<Injury>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
            ).subscribe((data: Injury[]) => {
                this.items = data;
                this.updateUrl();
            });
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    public showDeleteModal(injury: Injury): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
            .subscribe(result => {
                if (result) {
                    this.delete(injury.id);
                }
            });
        this.subscriptions.push(sub$);
    }

    public update(): Observable<PagedList<Injury>> {
        const filters = new InjuryFilters();
        filters.name = this.nameInput.nativeElement.value;
        filters.currentPage = this.paginator.pageIndex + 1;
        filters.pageSize = this.paginator.pageSize || 10;
        filters.sortOn = this.sort.active;
        filters.sortDirection = this.sort.direction;

        return this.injuryService
            .getAll(filters);
    }

    public updateUrl(): void {
        const newUrl = `${INJURIES_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}`;
        this.location.replaceState(newUrl);
    }

    private delete(index: number): void {
        this.injuryService.delete(this.items[index].id)
            .subscribe((res: boolean) => {
                if (res) {
                    this.items.splice(index, 1);
                    this.paginator.length -= 1;
                }
            });
    }
}
