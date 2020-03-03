import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

import { merge, of, Observable, fromEvent } from 'rxjs';
import { startWith, switchMap, map, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { PersonService } from '@persons/person.service';
import { Person, PersonType, PersonFilters, PagedList } from '@domain/models';
import { PERSONS_ROUTE } from '@constants/routes.constants';
import { DEBOUNCE_TIME } from '@constants/app.constants';
import { KEYUP, PAGE } from '@constants/help.constants';
import { ObserverComponent } from '@domain/base';
import { NotifierService } from '@notices/services';
import { ConfirmationMessage } from '@notices/shared';

@Component({
    selector: 'person-list',
    templateUrl: './person-list.component.html'
})
export class PersonListComponent extends ObserverComponent implements OnInit, AfterViewInit {
    public items: Person[];
    public personTypes: PersonType[];
    displayedColumns = ['lastRussianName', 'firstRussianName', 'birthday', 'position', 'country'];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('typeSelect') typeSelect: MatSelect;
    @ViewChild('nameInput') nameInput: ElementRef;

    constructor(private personService: PersonService,
                private route: ActivatedRoute,
                private location: Location,
                private notifier: NotifierService) {
        super();
    }

    public ngOnInit(): void {
        this.personService.getTypes()
            .subscribe((data: PersonType[]) => this.personTypes = data);
    }

    public ngAfterViewInit(): void {
        this.parseQueryParams();
        
        merge(this.sort.sortChange,
            this.typeSelect.selectionChange,
            fromEvent(this.nameInput.nativeElement, KEYUP)
                .pipe(debounceTime(DEBOUNCE_TIME),
                    distinctUntilChanged()))
            .subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page, this.typeSelect.selectionChange,
            fromEvent(this.nameInput.nativeElement, KEYUP)
                .pipe(debounceTime(DEBOUNCE_TIME),
                    distinctUntilChanged()))
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: PagedList<Person>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
            ).subscribe((data: Person[]) => {
                this.items = data;
                this.updateUrl();
            });
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

    public update(): Observable<PagedList<Person>> {
        const filters = new PersonFilters();
        filters.name = this.nameInput.nativeElement.value;
        filters.type = this.typeSelect.value;
        filters.currentPage = this.paginator.pageIndex + 1;
        filters.pageSize = this.paginator.pageSize;
        filters.sortOn = this.sort.active;
        filters.sortDirection = this.sort.direction;

        return this.personService
            .getAll(filters);
    }

    public setAsBestPlayer(personId: number): void {
        this.personService.setBestPlayer(personId)
            .subscribe((data: boolean) => data);
    }

    private updateUrl(): void {
        let newUrl = `${PERSONS_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}`;

        const name = this.nameInput.nativeElement.value;
        if (name) {
            newUrl = `${newUrl}&name=${name}`;
        }
        const typeId = this.typeSelect.value;
        if (typeId) {
            newUrl = `${newUrl}&typeId=${typeId}`;
        }

        this.location.replaceState(newUrl);

    }

    private delete(index: number): void {
        this.personService.delete(this.items[index].id)
            .subscribe((data: boolean) => {
                if (data) {
                    this.items.splice(index, 1);
                    this.paginator.length -= 1;
                }
            });
    }

    private parseQueryParams(): void {
        this.paginator.pageIndex = +this.route.snapshot.queryParams.page - 1 || 0;
        this.paginator.pageSize = +this.route.snapshot.queryParams.itemsPerPage || 15;
        this.nameInput.nativeElement.value = this.route.snapshot.queryParams.name || null;
        this.typeSelect.value = +this.route.snapshot.queryParams.typeId || null;
    }
}
