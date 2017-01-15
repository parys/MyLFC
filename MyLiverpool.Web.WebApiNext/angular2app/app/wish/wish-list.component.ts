import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { Wish } from "./wish.model";
import { WishService } from "./wish.service";
import { Observable } from "rxjs/Observable";
import { Pageable } from "../shared/pageable.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "wish-list",
    template: require("./wish-list.component.html")
})
export class WishListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    roles: IRoles;
    items: Wish[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    categoryId: number;
    userName: string;

    constructor(private service: WishService,
        private rolesChecked: RolesCheckedService,
        private location: Location,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();   
        this.sub = this.route.params.subscribe(params => {
            if (params["page"]) {
                this.page = +params["page"];
            }
            this.categoryId = +params["categoryId"];
            this.update();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    pageChanged(event: any): void {
        this.page = event.page;
        this.update();
        let newUrl = `$wish?page=${this.page}`;
       // if (this.categoryId) {
       //     newUrl = `${newUrl}&categoryId=${this.categoryId}`;
      //  }
       // if (this.userName) {
      //      newUrl = `${newUrl}&userName=${this.userName}`;
      //  }

        this.location.replaceState(newUrl);
    };

    update() {
        //let filters = new MaterialFilters();
        //filters.categoryId = this.categoryId;
        //filters.materialType = "News";
        //filters.userName = this.userName;
        //filters.page = this.page;

        this.service
            .getAll(this.page)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => {});
    }

    getTypeClass(i) {
        switch (i) {
            case 1:
                return "panel-danger";
            case 2:
                return "panel-warning";
            case 3:
                return "panel-info";
            case 4:
                return "panel-primary";
            default:
                return "";
        }
    };

    private parsePageable(pageable: Pageable<Wish>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }
}