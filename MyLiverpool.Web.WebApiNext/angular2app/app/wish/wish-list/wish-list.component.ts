import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material";
import { Wish } from "../wish.model";
import { WishService } from "../wish.service";
import { Pageable, RolesCheckedService, DeleteDialogComponent } from "@app/shared";

@Component({
    selector: "wish-list",
    templateUrl: "./wish-list.component.html"
})
export class WishListComponent implements OnInit {
    public items: Wish[];
    public page: number = 1;
    public itemsPerPage: number = 15;
    public totalItems: number;
    public categoryId: number;

    constructor(private service: WishService,
        public roles: RolesCheckedService,
        private location: Location,
        private route: ActivatedRoute,
        private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params["page"]) {
                this.page = +params["page"];
            }
            this.categoryId = +params["categoryId"];
            this.update();
        });
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
        const newUrl: string = `$wishes?page=${this.page}`;
        // if (this.categoryId) {
        //     newUrl = `${newUrl}&categoryId=${this.categoryId}`;
        //  }
        // if (this.userName) {
        //      newUrl = `${newUrl}&userName=${this.userName}`;
        //  }

        this.location.replaceState(newUrl);
    };

    public update(): void {
        //let filters = new MaterialFilters();
        //filters.categoryId = this.categoryId;
        //filters.materialType = "News";
        //filters.userName = this.userName;
        //filters.page = this.page;

        this.service
            .getAll(this.page)
            .subscribe(data => this.parsePageable(data),
            e => console.log(e));
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
        }, e => console.log(e));
    }

    private delete(index: number): void {
        this.service.delete(this.items[index].id)
            .subscribe(res => {
                if (res) {
                    this.items.splice(index, 1);
                    this.totalItems -= 1;
                }
            },
            e => console.log(e));
    }

    private parsePageable(pageable: Pageable<Wish>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }
}