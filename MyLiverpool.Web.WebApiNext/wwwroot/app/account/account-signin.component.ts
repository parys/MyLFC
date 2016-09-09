import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'account-signin',
    templateUrl: 'app/account/account-signin.component.html',
    // providers: [NewsService]
})

export class AccountSigninComponent implements OnInit {

    username: string;
    password: string;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        //this.newsService
        //    .GetAll()
        //    .subscribe(data => this.parsePageable(data),
        //    error => console.log(error),
        //    () => console.log("success load list news"));
    }

    login(): void {
        console.log(this.username + " " + this.password);
        let result = this.authService.login(this.username, this.password);
        //  if(result)
    }
}