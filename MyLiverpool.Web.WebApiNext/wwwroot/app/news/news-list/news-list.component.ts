import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { Location  } from "@angular/common";
import { NewsService } from "../shared/news.service";
import { News } from "../shared/news.model";
import { Observable } from "rxjs/Observable";
import { Pageable } from "../../shared/pageable.model";
import {MaterialFilters} from "../newsFilters.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { RolesCheckedService, IRoles } from "../../shared/index";

@Component({
    selector: "news-list",
    templateUrl: "app/news/news-list/news-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    items: News[];
    items1: Observable<News[]>;
    page = 1;
    itemsPerPage = 15;
    totalItems: number;
    categoryId: number;
    userName: string;
    roles: IRoles;

    constructor(private newsService: NewsService, private route: ActivatedRoute, private location: Location, private rolesChecked: RolesCheckedService ) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;
        console.log(this.roles);
        this.sub = this.route.params.subscribe(params => {
            if (params["page"]) {
                this.page = +params["page"];
            }
            this.categoryId = +params["categoryId"];
            this.userName = params["userName"];
            this.update();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPage(page: number) {
        this.page = page;
        this.update();
        let newUrl = `news/list/${this.page}`;
        if (this.categoryId) {
            newUrl = `${newUrl}/${this.categoryId}`;
        }
        this.location.replaceState(newUrl);
    }

    private parsePageable(pageable: Pageable<News>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    update() {
        let filters = new MaterialFilters();
        filters.categoryId = this.categoryId;
        filters.materialType = "News";
        filters.userName = this.userName;
        filters.page = this.page;

        this.items1 = this.newsService
            .GetAll(filters)
            .do(res => {
                this.parsePageable(res);
            })
            .map(res => res.list);

        //     .subscribe(data => this.parsePageable(data),
        //         error => console.log(error),
        //          () => console.log("success load list news"));

        /*
         this.asyncMeals = serverCall(this.meals, page)
        .do(res => {
            this.total = res.total;
            this.p = page;
            this.loading = false;
        })
        .map(res => res.items);
}
        */
    }
}
