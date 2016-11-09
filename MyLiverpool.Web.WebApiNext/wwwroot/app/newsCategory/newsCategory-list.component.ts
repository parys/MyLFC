import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Pageable } from "../shared/pageable.model";
import { NewsCategory } from "./shared/newsCategory.model";
import { NewsCategoryService } from "./shared/newsCategory.service";

@Component({
    selector: "newsCategory-list",
    templateUrl: "app/newsCategory/newsCategory-list.component.html"
})

export class NewsCategoryListComponent implements OnInit {

    items: NewsCategory[];

    constructor(private newsCategoryService: NewsCategoryService,
        private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle("Категории");
        this.newsCategoryService
            .GetAll()
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => {});
    }

    private parsePageable(model: NewsCategory[]): void {
        this.items = model; 
    }

    delete(index: number) {
        this.newsCategoryService.Delete(this.items[index].id).subscribe(data => data,
            error => console.log(error),
            () => {});
        this.items.splice(index, 1);
    }
}