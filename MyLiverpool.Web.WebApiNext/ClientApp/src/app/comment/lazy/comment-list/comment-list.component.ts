import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Location } from "@angular/common";
import { MatDialog } from "@angular/material";
import { Subscription } from "rxjs";
import { Comment } from "@app/+common-models";
import { CommentService } from "@app/comment/core";
import { DeleteDialogComponent, Pageable } from "@app/shared";
import { RolesCheckedService } from "@app/+auth";
import { CommentFilter } from "@app/comment/model";
import { COMMENTS_ROUTE } from "@app/+constants";

@Component({
    selector: "comment-list",
    templateUrl: "./comment-list.component.html"
})
export class CommentListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public filterForm: FormGroup;
    public items: Comment[];
    public page: number = 1;
    public onlyUnverified: boolean = false;
    public categoryId: number;
    public userName: string;
    public userId: number;
    public itemsPerPage: number;
    public totalItems: number;
    public intervalArray: { key: string, value: number }[]
        = [{ key: "15", value: 15 },
            { key: "25", value: 25 },
            { key: "50", value: 50 }];

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
                this.page = qParams["page"] || 1;
                this.categoryId = qParams["categoryId"] || null;
                this.userName = qParams["userName"] || "";
                this.userId = qParams["userId"];
                this.onlyUnverified = qParams["onlyUnverified"] || false;
                this.itemsPerPage = qParams["itemsPerPage"] || 15;
            },
            e => console.log(e));
        this.update();
    }

    public ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
        if (this.sub2) this.sub2.unsubscribe();
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
    };

    public update(): void {
        const filters = new CommentFilter();
        filters.onlyUnverified = this.filterForm.get("onlyUnverified").value;
        filters.userId = this.userId;
        filters.page = this.page;
        filters.itemsPerPage = this.filterForm.get("itemsPerPage").value;
        this.sub2 = this.materialCommentService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
                e => console.log(e),
                () => { this.updateLocation(); });
    }

    private updateLocation(): void {
        let newUrl = `${COMMENTS_ROUTE}?page=${this.page}&itemsPerPage=${this.itemsPerPage}`;
        if (this.userId) {
            newUrl = `${newUrl}&userId=${this.userId}`;
        }
        if (this.onlyUnverified !== undefined) {
            newUrl = `${newUrl}&onlyUnverified=${this.onlyUnverified}`;
        }
        this.location.replaceState(newUrl);
    }

    private parsePageable(pageable: Pageable<Comment>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
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
                        this.totalItems -= 1;
                    }
                });
    }

    private initForm(): void {
        this.filterForm = this.formBuilder.group({
            onlyUnverified: [this.onlyUnverified],
            itemsPerPage: [this.itemsPerPage || 15]
        });
    }
}