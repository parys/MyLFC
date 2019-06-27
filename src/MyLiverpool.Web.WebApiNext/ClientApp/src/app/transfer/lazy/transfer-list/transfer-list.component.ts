import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Subscription, merge, of, Observable } from "rxjs";
import { startWith, switchMap, map, catchError } from "rxjs/operators";
import { TransferService } from "@app/transfer/core";
import { Transfer, TransferFilters } from "@app/transfer/model";
import { PagedList } from "@app/shared";
import { RolesCheckedService } from "@app/+auth";
import { TRANSFERS_ROUTE, PAGE } from "@app/+constants";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
    selector: "transfer-list",
    templateUrl: "./transfer-list.component.html"
})
export class TransferListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: Transfer[];
    displayedColumns = ["personName", "clubName", "startDate", "onLoan", "amount"];

    @ViewChild(MatSort, { static: true })sort: MatSort;
    @ViewChild(MatPaginator, { static: true })paginator: MatPaginator;

    constructor(private service: TransferService,
        private route: ActivatedRoute,
        private location: Location,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe(qParams => {
            this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
            this.paginator.pageSize = +qParams["itemsPerPage"] || 15;
        });

       // merge(this.sort.sortChange,
        //        this.roleSelect.selectionChange,
       //         fromEvent(this.userInput.nativeElement, keyup),
       //         fromEvent(this.ipInput.nativeElement, keyup)
        //        .pipe(debounceTime(DEBOUNCE_TIME),
       //             distinctUntilChanged()))
      //      .subscribe(() => this.paginator.pageIndex = 0);

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
        filters.pageSize = this.paginator.pageSize;
        filters.sortOn = this.sort.active;
        filters.sortDirection = this.sort.direction;

        return this.service
            .getAllNew(filters);
    }

    public updateUrl(): void {
        let newUrl = `${TRANSFERS_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}`;
        this.location.replaceState(newUrl);
    };
}