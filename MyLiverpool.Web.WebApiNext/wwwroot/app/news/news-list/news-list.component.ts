import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { NewsService } from '../shared/news.service';
import { News } from "../shared/news.model";
import { Observable } from 'rxjs/Observable';
import { Pageable } from '../../shared/pageable.model';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'news-list',
    templateUrl: 'app/news/news-list/news-list.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [NewsService]
})

export class NewsListComponent implements OnInit {

    items: News[];

    constructor(private newsService: NewsService) { //todo NEED CONFIGURation
    }

    ngOnInit() {
        this.newsService
                .GetAll()
                .subscribe(data => this.parsePageable(data),
                error => console.log(error),
                () => console.log("success load list news"));
        }

    private parsePageable(pageable: Pageable<News>): void {
        this.items = pageable.list; //todo parse others
    }
}