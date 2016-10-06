import { Component, OnInit, OnDestroy } from "@angular/core";
import { Wish } from "./wish.model";
import { WishService } from "./wish.service";
import { Observable } from "rxjs/Observable";
import { Pageable } from "../shared/pageable.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "wish-list",
    templateUrl: "app/wish/wish-list.component.html"
})
export class WishListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    items: Wish[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    categoryId: number;
    userName: string;

    constructor(private service: WishService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['page']) {
                this.page = +params['page'];
            }
            this.categoryId = +params['categoryId'];
        //    this.userName = params['userName'];
            this.update();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private parsePageable(pageable: Pageable<Wish>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    update() {
        //let filters = new MaterialFilters();
        //filters.categoryId = this.categoryId;
        //filters.materialType = "News";
        //filters.userName = this.userName;
        //filters.page = this.page;

        this.service
            .GetAll()//bug
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => console.log("success load list wish"));
    }
}