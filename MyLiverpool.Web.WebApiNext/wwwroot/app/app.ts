import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { NewsComponent } from './news/news/news.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]//,
 //   styleUrls: ['app/app.component.css']
})

export class AppComponent {
    constructor(private router: Router) {
    }
}