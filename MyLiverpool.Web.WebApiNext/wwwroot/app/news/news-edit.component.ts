import { Component, OnInit, OnDestroy } from "@angular/core";
import { NewsService } from "./news.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { News } from "./news.model";
import { NewsCategoryService } from "../newsCategory/shared/newsCategory.service";
import { NewsCategory } from "../newsCategory/shared/newsCategory.model";

@Component({
    selector: "news-edit",
    templateUrl: "app/news/news-edit.component.html"
})

export class NewsEditComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    item: News;
    categories: NewsCategory[];

    constructor(private newsService: NewsService, private newsCategoryService: NewsCategoryService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            if (id > 0) {
                this.newsService.GetSingle(id)
                    .subscribe(data => this.parse(data),
                        error => console.log(error),
                        () => console.log("success load edit news"));
            }
        });
        this.newsCategoryService.GetAll()
            .subscribe(data => this.parseCategories(data),
            error => console.log(error),
            () => console.log("success load categoiris edit news"));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        if (this.item.id > 0) {
            this.newsService.Update(this.item.id, this.item)
                .subscribe(data => console.log(data),//this.router.navigate(["/news", data.id]),
                error => console.log(error),
                () => console.log("success update edit news"));
        } else {
            this.newsService.Create(this.item)
                .subscribe(data => console.log(data),//this.router.navigate(["/news", data.id]),
                error => console.log(error),
                () => console.log("success Create edit news"));
        }
    }

    private parse(item: News): void {
        this.item = item;
    }

    private parseCategories(items: NewsCategory[]) {
        this.categories = items;
    }
}