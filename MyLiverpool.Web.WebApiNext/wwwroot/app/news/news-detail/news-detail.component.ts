import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { NewsService } from '../shared/news.service';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'news-detail',
    templateUrl: 'app/news/news-detail/news-detail.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [NewsService]
})

export class NewsDetailComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(private _newsService: NewsService, private route: ActivatedRoute) {
        this.message = "Hello from HomeComponent constructor";
    }

 //   constructor(
   //     private ,
   //     private router: Router,
     //   private service: HeroService) { }

    ngOnInit() {
      //  let id = +this.route.params['id'];
      //  console.log(id);
        //= +params['id'];
        //    this._dataService
        //        .GetAll()
        //        .subscribe(data => this.values = data,
        //        error => console.log(error),
        //        () => console.log('Get all complete'));

        //this.route.params
        //    .map(params => params['id'])
        //    .switchMap(id => this.contactsService.getContact(id))
        //    .subscribe(contact => this.contact = contact);
    }
}