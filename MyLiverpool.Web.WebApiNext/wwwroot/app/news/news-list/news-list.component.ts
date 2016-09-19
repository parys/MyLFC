import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { News } from "../shared/news.model";
import { Observable } from 'rxjs/Observable';
import { Pageable } from '../../shared/pageable.model';
import {MaterialFilters} from "../newsFilters.model";

@Component({
    selector: 'news-list',
    templateUrl: 'app/news/news-list/news-list.component.html'
})

export class NewsListComponent implements OnInit {

    items: News[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    categoryId: number;
    userName: string;

    constructor(private newsService: NewsService) { //todo NEED CONFIGURation

    }

    ngOnInit() {
        this.update();
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
        filters.materialType = 1;
        filters.userName = this.userName;
        filters.page = this.page;

        this.newsService
            .GetAll(filters)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => console.log("success load list news"));
    }
}