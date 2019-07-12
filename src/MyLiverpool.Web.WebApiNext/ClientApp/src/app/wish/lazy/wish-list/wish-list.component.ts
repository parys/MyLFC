import { Component, OnInit, ViewChild } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { merge, of, Observable } from "rxjs";
import { startWith, switchMap, map, catchError } from "rxjs/operators";
import { Wish, WishFilter } from "../../model";
import { WishService } from "../wish.service";
import { PagedList, DeleteDialogComponent } from "@app/shared";
import { RolesCheckedService } from "@app/+auth";
import { PAGE, WISHES_ROUTE } from "@app/+constants";

@Component({
    selector: "wish-list",
    templateUrl: "./wish-list.component.html",
    styleUrls: ["./wish-list.component.scss"]
})
export class WishListComponent implements OnInit {
    public items: Wish[];
    public stateId: number;
    @ViewChild(MatPaginator, { static: true })paginator: MatPaginator;

    constructor(private service: WishService,
        public roles: RolesCheckedService,
        private location: Location,
        private route: ActivatedRoute,
        private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.route.queryParams.subscribe(qParams => {
            this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
            this.paginator.pageSize = +qParams["itemsPerPage"] || 15;
            this.stateId = +qParams["stateId"];

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
        const newUrl: string = `${WISHES_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}`;
        this.location.replaceState(newUrl);
    };

    public update(): Observable<PagedList<Wish>> {
        const filters = new WishFilter();
        filters.stateId = this.stateId;
        filters.pageSize = this.paginator.pageSize;
        filters.currentPage = this.paginator.pageIndex + 1;

        return this.service.getAllNew(filters);
    }

    public getTypeClass(i: number): string {
        switch (i) {
            case 1:
                return "panel-danger";
            case 2:
                return "panel-success";
            case 3:
                return "panel-info";
            case 4:
                return "panel-primary";
            default:
                return "";
        }
    };

    public showDeleteModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
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