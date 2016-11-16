import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Club } from "./club.model";
import { ClubService } from "./club.service";
import { Pageable } from "../shared/pageable.model";
//import { UserFilters } from "./userFilters.model";

@Component({
    selector: "club-list",
    template: require("./club-list.component.html")
})

export class ClubListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    items: Club[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    categoryId: number;
    userName: string;

    constructor(private clubService: ClubService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params["page"]) {
                this.page = +params["page"];
            }
            //  this.categoryId = +params['categoryId'];
            //  this.userName = params['userName'];
            this.update();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private parsePageable(pageable: Pageable<Club>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    update() {
        //let filters = new UserFilters();
        ////  filters.categoryId = this.categoryId;
        ////  filters.materialType = "News";
        //filters.userName = this.userName;
        //filters.page = this.page;

        //this.userService
        //    .GetAll(filters)
        //    .subscribe(data => this.parsePageable(data),
        //    error => console.log(error),
        //    () => { });
    }
}