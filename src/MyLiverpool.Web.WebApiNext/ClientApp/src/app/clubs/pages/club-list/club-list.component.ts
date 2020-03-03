import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { merge, of, Observable, fromEvent } from 'rxjs';
import { startWith, switchMap, map, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ClubService } from '@clubs/club.service';
import { PagedList, Club, ClubFilters } from '@domain/models';
import { CLUBS_ROUTE } from '@constants/routes.constants';
import { KEYUP, PAGE } from '@constants/help.constants';
import { DEBOUNCE_TIME } from '@constants/app.constants';
import { ObserverComponent } from '@domain/base';
import { NotifierService } from '@notices/services';
import { ConfirmationMessage } from '@notices/shared';

@Component({
    selector: 'club-list',
    templateUrl: './club-list.component.html',
    styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent extends ObserverComponent implements AfterViewInit {
    public items: Club[];
    displayedColumns = ['logo', 'name', 'englishName', 'stadiumName', 'tool'];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('nameInput') nameInput: ElementRef;

    constructor(private clubService: ClubService,
                private route: ActivatedRoute,
                private location: Location,
                private notifier: NotifierService) {
        super();
    }

    public ngAfterViewInit(): void {
        if (+this.route.snapshot.queryParams[PAGE]) {
            this.paginator.pageIndex = +this.route.snapshot.queryParams[PAGE] - 1;
        }

        merge(this.sort.sortChange,
            fromEvent(this.nameInput.nativeElement, KEYUP)
                .pipe(debounceTime(DEBOUNCE_TIME),
                    distinctUntilChanged()))
            .subscribe(() => this.paginator.pageIndex = 0);


        merge(this.sort.sortChange,
            this.paginator.page,
            fromEvent(this.nameInput.nativeElement, KEYUP)
                .pipe(debounceTime(DEBOUNCE_TIME),
                    distinctUntilChanged()))
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: PagedList<Club>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
            ).subscribe((data: Club[]) => {
                this.items = data;
                this.updateUrl();
            });
    }

    public showDeleteModal(index: number): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить клуб?'
        })).subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
        this.subscriptions.push(sub$);
    }

    public update(): Observable<PagedList<Club>> {
        const filters = new ClubFilters();
        filters.name = this.nameInput.nativeElement.value;
        filters.currentPage = this.paginator.pageIndex + 1;
        filters.pageSize = this.paginator.pageSize || 10;
        filters.sortOn = this.sort.active || 'name';
        filters.sortDirection = this.sort.direction || 'asc';
        return this.clubService
            .getAll(filters);
    }

    public updateUrl(): void {
        const newUrl = `${CLUBS_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}`;
        this.location.replaceState(newUrl);
    }

    private delete(index: number): void {
        this.clubService.delete(this.items[index].id)
            .subscribe((result: boolean) => {
                if (result) {
                    this.items.splice(index, 1);
                    this.paginator.length -= 1;
                }
            });
    }
}
