import { Component, OnDestroy, ViewChild, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { merge, of, Observable, Subscription } from "rxjs";
import { startWith, switchMap, map, catchError } from "rxjs/operators";
import { Comment } from "@app/+common-models";
import { CommentService } from "@app/comment/core";
import { DeleteDialogComponent, PagedList } from "@app/shared";
import { RolesCheckedService } from "@app/+auth";
import { CommentFilter } from "@app/comment/model";
import { COMMENTS_ROUTE, PAGE, USER_ID } from "@app/+constants";

@Component({
    selector: "comment-list",
    templateUrl: "./comment-list.component.html"
})
export class CommentListComponent implements OnDestroy, AfterViewInit {
    private sub: Subscription;
    public items: Comment[];
    public categoryId: number;
    public userName: string;
    public userId: number;

    @ViewChild(MatPaginator, { static: true })paginator: MatPaginator;
    @ViewChild("onlyUnverified", { static: true })onlyUnverified: MatCheckbox;

    constructor(private materialCommentService: CommentService,
        private route: ActivatedRoute,
        private location: Location,
        public roles: RolesCheckedService,
        private dialog: MatDialog) {
    }

    public ngAfterViewInit(): void {
        this.sub = this.route.queryParams.subscribe(qParams => {
                this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
                this.paginator.pageSize = +qParams["itemsPerPage"] || 15;

                this.categoryId = qParams["categoryId"] || null;
                this.userName = qParams["userName"] || "";
                this.userId = qParams[USER_ID];
                this.onlyUnverified.checked = qParams["onlyUnverified"] || false;
            });

        merge(this.paginator.page,
                this.onlyUnverified.change
            )
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: PagedList<Comment>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
        ).subscribe((data: Comment[]) => {
                    this.items = data;
                    this.updateUrl();
                });
    }

    public ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }

    public update(): Observable<PagedList<Comment>> {
        const filters = new CommentFilter();
        filters.onlyUnverified = this.onlyUnverified.checked || false;
        filters.userId = this.userId;
        filters.currentPage = this.paginator.pageIndex + 1;
        filters.pageSize = this.paginator.pageSize;
        return this.materialCommentService
            .getAllNew(filters);
    }

    private updateUrl(): void {
        let newUrl = `${COMMENTS_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}&itemsPerPage=${this.paginator.pageSize}`;
        if (this.userId) {
            newUrl = `${newUrl}&${USER_ID}=${this.userId}`;
        }
        if (this.onlyUnverified !== undefined) {
            newUrl = `${newUrl}&onlyUnverified=${this.onlyUnverified.checked}`;
        }
        this.location.replaceState(newUrl);
    }

    public verify(index: number): void {
        this.materialCommentService
            .verify(this.items[index].id)
            .subscribe((data: boolean) => this.items[index].isVerified = data);
    }

    private showDeleteModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
    }

    private delete(index: number): void {
        this.materialCommentService.delete(this.items[index].id)
            .subscribe((res: boolean) => {
                if (res) {
                    this.items.splice(index, 1);
                    this.paginator.length -= 1;
                }});
    }
}