import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../auth/auth.service";
import {Signup} from "./signup.model";

@Component({
    selector: 'account-signup',
    templateUrl: 'app/account/account-signup.component.html',
   // providers: [NewsService]
})

export class AccountSignupComponent implements OnInit {
    
   // item: Signup;

    registerForm: FormGroup;// = new FormGroup({
    //    username: new FormControl(),
    //    email: new FormControl(),
    //    password: new FormControl(),
    //    confirmPassword: new FormControl(),
    //    fullName: new FormControl(),
    //    birthday: new FormControl()
    //});


    constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
       // this.item = new Signup();
        this.registerForm = this.formBuilder.group({
            'username': ['', Validators.compose([
                Validators.required, ])],
            'email': ['', Validators.compose([
                Validators.required,])],
            'password': ['', Validators.compose([
                Validators.required,])],
            'confirmPassword': ['', Validators.compose([
                Validators.required,])],
            'fullName': ['', Validators.compose([
                Validators.required,])],
            'birthday': ['', Validators.compose([
                Validators.required,])]
        });
        //this.newsService
        //    .GetAll()
        //    .subscribe(data => this.parsePageable(data),
        //    error => console.log(error),
        //    () => console.log("success load list news"));
    }

    onSubmit(value: any): void {
        console.log('you submitted value: ', value);
    }

    register(): void {
      //  console.log(this.item);
      //  console.log(this.item.username);
    }
}