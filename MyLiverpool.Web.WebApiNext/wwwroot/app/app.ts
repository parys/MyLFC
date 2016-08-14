import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { NewsDetailComponent } from './news/news-detail/news-detail.component';

@Component({
    selector: 'my-app',
    template: `<router-outlet> </router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
 //   styleUrls: ['app/app.component.css']
})

export class AppComponent {
    //constructor(private router: Router) {
    //}
}