import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'secured-link',
    templateUrl: 'app/shared/securedLink.component.html',
    directives: [CORE_DIRECTIVES],
    inputs: ['link', 'name']
    // providers: [NewsService]
})

export class SecuredLinkComponent implements OnInit {
    @Input()
    role: string;
    link: any;
    name: any;
    constructor() {//private newsService: NewsService) {
    }

    ngOnInit() {
        //this.newsService
        //    .GetAll()
        //    .subscribe(data => this.parsePageable(data),
        //    error => console.log(error),
        //    () => console.log("success load list news"));
    }

    //private parsePageable(pageable: Pageable<News>): void {
    //    this.items = pageable.list; //todo parse others
    //}
}