import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { NewsService } from '../shared/news.service';

@Component({
    selector: 'news-detail',
    templateUrl: 'app/news/news-detail/news-detail.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [NewsService]
})

export class NewsDetailComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(private _newsService: NewsService) {
        this.message = "Hello from HomeComponent constructor";
    }

    ngOnInit() {
    //    this._dataService
    //        .GetAll()
    //        .subscribe(data => this.values = data,
    //        error => console.log(error),
    //        () => console.log('Get all complete'));
    }
}