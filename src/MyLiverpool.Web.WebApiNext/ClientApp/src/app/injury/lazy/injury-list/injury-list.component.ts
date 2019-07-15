import { Component, OnInit, OnDestroy, ViewChild, ElementRef  } from "@angular/core"; 
import { Location } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ActivatedRoute } from "@angular/router";
import { merge, of, fromEvent, Observable, Subscription } from "rxjs";
import { startWith, switchMap, map, catchError, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Injury, InjuryFilters } from "@app/injury/model";
import { InjuryService } from "@app/injury/core";
import { PagedList, DeleteDialogComponent } from "@app/shared";
import { DEBOUNCE_TIME, INJURIES_ROUTE, KEYUP, PAGE } from "@app/+constants";

@Component({
    selector: "injury-list",
    templateUrl: "./injury-list.component.html"
})

export class InjuryListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: Injury[];
    displayedColumns = ["personName", "startTime", "endTime", "description", "tool"];

    @ViewChild(MatSort, { static: true })sort: MatSort;
    @ViewChild(MatPaginator, { static: true })paginator: MatPaginator;
    @ViewChild("nameInput", { static: true })nameInput: ElementRef;

    constructor(private injuryService: InjuryService,
        private route: ActivatedRoute,
        private location: Location,
        private dialog: MatDialog) {
    }

    public ngOnInit(): void {
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
        if (this.sub) this.sub.unsubscribe();
    }

    public showDeleteModal(injury: Injury): void {
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(injury.id);
            }
        });
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
    };
    
    private delete(index: number): void {
        this.injuryService.delete(this.items[index].id)
            .subscribe((res: boolean) => {
                if (res) {
                    this.items.splice(index, 1);
                    this.paginator.length -= 1;
                }});
    }
}