﻿import { Component, OnInit, OnDestroy } from "@angular/core";
import { NewsService } from "./news.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { News } from "./news.model";
import { LocalStorageMine } from "../shared/localStorage";

@Component({
    selector: "news-detail",
    templateUrl: "app/news/news-detail.component.html"
})

export class NewsDetailComponent implements OnInit, OnDestroy {
    
    private sub: Subscription;
    item: News;

    constructor(private newsService: NewsService, private route: ActivatedRoute, private localStorage: LocalStorageMine) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            this.newsService.getSingle(id)
                .subscribe(data => this.parse(data),
                error => console.log(error),
                () => console.log("success load edit news"));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private parse(item: News): void {
        this.item = item;
        this.addView();
    }

    private addView() {
        let id = this.item.id;
        if (!this.localStorage.get(`material${id}`)) {
            this.localStorage.set(`material${id}`, "1");
            this.newsService.addView(id).subscribe(data => data);
        }
    }
}