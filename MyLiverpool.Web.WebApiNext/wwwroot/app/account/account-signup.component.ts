import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {Signup} from "./signup.model";
import {AccountService} from "./account.service";

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


    constructor(private accountService: AccountService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
       // this.item = new Signup();
        this.registerForm = this.formBuilder.group({
            'userName': ['', Validators.compose([
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
        
    }

    onSubmit(value: any): void {
        console.log('you submitted value: ', value);
        var signup = new Signup();
        signup.userName = this.registerForm.controls["userName"].value;
        signup.email = this.registerForm.controls["email"].value;
        signup.password = this.registerForm.controls["password"].value;
        signup.confirmPassword = this.registerForm.controls["confirmPassword"].value;
        signup.fullName = this.registerForm.controls["fullName"].value;
        signup.birthday = this.registerForm.controls["birthday"].value;

        this.accountService
            .Create(signup)
            .subscribe(data => { },
            error => console.log(error),
            () => console.log("user created"));
    }

    register(): void {
      //  console.log(this.item);
      //  console.log(this.item.username);
    }
}