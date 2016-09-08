import { Component, OnInit } from '@angular/core';
//import { NgControl } from '@angular/forms';
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AuthService} from "../auth/auth.service";
import {Signup} from "./signup.model";

@Component({
    selector: 'account-signup',
    templateUrl: 'app/account/account-signup.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]//,
   // providers: [NewsService]
})

export class AccountSignupComponent implements OnInit {
    
  //  username: NgControl;
    item: Signup;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.item = new Signup();
        //this.newsService
        //    .GetAll()
        //    .subscribe(data => this.parsePageable(data),
        //    error => console.log(error),
        //    () => console.log("success load list news"));
    }

    register(): void {
        console.log(this.item);
        console.log(this.item.username);
    }
    //private parsePageable(pageable: Pageable<News>): void {
    //    this.items = pageable.list; //todo parse others
    //}
}