import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";
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
    sub: Subscription;
    items: Match[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    categoryId: number;

    constructor(private matchService: MatchService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(qParams => {
                this.page = qParams["page"] || 1;
                this.categoryId = qParams["categoryId"] || "";
            //    this.userName = qParams["userName"] || "";
            //    this.onlyUnverified = qParams["onlyUnverified"] || false;
            },
            error => console.log(error));
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

    pageChanged(event: any): void {
        this.page = event.page;
        this.update();
        let newUrl = `matches?page=${this.page}`;
        //if (this.categoryId) {
        //     newUrl = `${newUrl}/${this.categoryId}`;
        // }
        this.location.replaceState(newUrl);
    };
}