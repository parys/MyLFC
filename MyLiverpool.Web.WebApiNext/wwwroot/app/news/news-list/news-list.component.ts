import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { News } from "../shared/news.model";
import { Observable } from 'rxjs/Observable';
import { Pageable } from '../../shared/pageable.model';
import {MaterialFilters} from "../newsFilters.model";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

//module News {
    @Component({
        selector: 'news-list',
        templateUrl: 'app/news/news-list/news-list.component.html'
    })
    export class NewsListComponent implements OnInit, OnDestroy {

        private sub: Subscription;
        items: News[];
        page: number = 1;
        itemsPerPage: number = 15;
        totalItems: number;
        categoryId: number;
        userName: string;

        constructor(private newsService: NewsService, private route: ActivatedRoute) {
        }

        ngOnInit() {
            this.sub = this.route.params.subscribe(params => {
                if (params['page']) {
                    this.page = +params['page'];
                }
                this.categoryId = +params['categoryId'];
                this.userName = params['userName'];
                this.update();
            });
        }

        ngOnDestroy() {
            this.sub.unsubscribe();
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

            this.newsService
                .GetAll(filters)
                .subscribe(data => this.parsePageable(data),
                    error => console.log(error),
                    () => console.log("success load list news"));
        }
    }
//}