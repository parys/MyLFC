import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Match } from "./match.model";
import { MatchService } from "./match.service";
import { Pageable } from "../shared/pageable.model";

@Component({
    selector: "match-list",
    templateUrl: "./match-list.component.html"
})

export class MatchListComponent implements OnInit {
    items: Match[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    categoryId: number;

    constructor(private matchService: MatchService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        if(this.route.snapshot.queryParams["page"]) {
            this.page = this.route.snapshot.queryParams["page"];
        };
        this.update();
    }

    private parsePageable(pageable: Pageable<Match>): void {
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

        this.matchService
            .getAll(this.page)
            .subscribe(data => this.parsePageable(data),
                error => console.log(error));
    }
}