import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'account-signin',
    templateUrl: 'app/account/account-signin.component.html'
})

export class AccountSigninComponent implements OnInit {

    loginForm: FormGroup;
    username: string;
    password: string;

    constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username': ['', Validators.compose([
                Validators.required])],
            'password': ['', Validators.compose([
                Validators.required])]
        });
        //this.newsService
        //    .GetAll()
        //    .subscribe(data => this.parsePageable(data),
        //    error => console.log(error),
        //    () => console.log("success load list news"));
    }

    onSubmit(ra: any): void {
        console.log("1" + ra);
        console.log(this.loginForm.controls["username"].value);
        this.username = this.loginForm.controls["username"].value;
        this.password = this.loginForm.controls["password"].value;
        console.log(this.username + " " + this.password);
        let result = this.authService.login(this.username, this.password);
        //  if(result)
    }
}