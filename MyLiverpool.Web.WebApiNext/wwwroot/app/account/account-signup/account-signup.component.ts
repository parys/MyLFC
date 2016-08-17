import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'account-signup',
    templateUrl: 'app/account/account-signup/account-signup.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]//,
   // providers: [NewsService]
})

export class AccountSignupComponent implements OnInit {

 //   items: News[];

    constructor(){//private newsService: NewsService) {
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