import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Location } from "@angular/common";
import { MatDialog, MatPaginator } from "@angular/material";
import { merge, of, Observable } from "rxjs";
import { startWith, switchMap, map, catchError } from "rxjs/operators";
import { Subscription } from "rxjs";
import { Comment } from "@app/+common-models";
import { CommentService } from "@app/comment/core";
import { DeleteDialogComponent, Pageable } from "@app/shared";
import { RolesCheckedService } from "@app/+auth";
import { CommentFilter } from "@app/comment/model";
import { COMMENTS_ROUTE, PAGE } from "@app/+constants";

@Component({
    selector: "comment-list",
    templateUrl: "./comment-list.component.html"
})
export class CommentListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public filterForm: FormGroup;
    public items: Comment[];
    public onlyUnverified: boolean = false;
    public categoryId: number;
    public userName: string;
    public userId: number;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private materialCommentService: CommentService,
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder,
        public roles: RolesCheckedService,
        private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.initForm();
        this.sub = this.route.queryParams.subscribe(qParams => {
            this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
            this.paginator.pageSize = +qParams["itemsPerPage"] || 15;

            this.categoryId = qParams["categoryId"] || null;
            this.userName = qParams["userName"] || "";
            this.userId = qParams["userId"];
            this.onlyUnverified = qParams["onlyUnverified"] || false;
        },
            e => console.log(e));

        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: Pageable<Comment>) => {
                    this.paginator.pageIndex = data.pageNo - 1;
                    this.paginator.pageSize = data.itemPerPage;
                    this.paginator.length = data.totalItems;

                    return data.list;
                }),
                catchError(() => {
                    return of([]);
                })
            ).subscribe(data => {
                this.items = data;
                this.updateUrl();
            },
                e => console.log(e));
    }

    public ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
        if (this.sub2) this.sub2.unsubscribe();
    }

    public update(): Observable<Pageable<Comment>> {
        const filters = new CommentFilter();
        filters.onlyUnverified = this.filterForm.get("onlyUnverified").value;
        filters.userId = this.userId;
        filters.page = this.paginator.pageIndex + 1;
        filters.itemsPerPage = this.paginator.pageSize;
        return this.materialCommentService
            .getAll(filters);
    }

    private updateUrl(): void {
        let newUrl = `${COMMENTS_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}&itemsPerPage=${this.paginator.pageSize}`;
        if (this.userId) {
            newUrl = `${newUrl}&userId=${this.userId}`;
        }
        if (this.onlyUnverified !== undefined) {
            newUrl = `${newUrl}&onlyUnverified=${this.onlyUnverified}`;
        }
        this.location.replaceState(newUrl);
    }

    public verify(index: number): void {
        let result: boolean;
        this.materialCommentService
            .verify(this.items[index].id)
            .subscribe(data => result = data,
                e => console.log(e),
                () => {
                    if (result) {
                        this.items[index].isVerified = true;
                    }
                });
    }

    private showDeleteModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        },
            e => console.log(e));
    }

    private delete(index: number): void {
        let result: boolean;
        this.materialCommentService.delete(this.items[index].id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        this.items.splice(index, 1);
                        this.paginator.length -= 1;
                    }
                });
    }

    private initForm(): void {
        this.filterForm = this.formBuilder.group({
            onlyUnverified: [this.onlyUnverified]
        });
    }
}