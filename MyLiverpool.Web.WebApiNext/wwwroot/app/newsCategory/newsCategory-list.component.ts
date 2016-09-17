import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pageable } from "../shared/pageable.model";
import { NewsCategory } from "./shared/newsCategory.model";
import { NewsCategoryService } from "./shared/newsCategory.service";

@Component({
    selector: 'newsCategory-list',
    templateUrl: 'app/newsCategory/newsCategory-list.component.html'
})

export class NewsCategoryListComponent implements OnInit {

    items: NewsCategory[];

    constructor(private newsCategoryService: NewsCategoryService) {
    }

    ngOnInit() {
        this.newsCategoryService
            .GetAll()
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => console.log("success load categoryu lits news"));
    }

    private parsePageable(model: NewsCategory[]): void {
        this.items = model; //todo parse others
    }
}