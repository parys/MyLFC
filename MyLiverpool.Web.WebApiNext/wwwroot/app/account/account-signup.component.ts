import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {Signup} from "./signup.model";
import {AccountService} from "./account.service";

@Component({
    selector: 'account-signup',
    templateUrl: 'app/account/account-signup.component.html'
})

export class AccountSignupComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private accountService: AccountService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            'userName': ['123', Validators.compose([ //todo composeASync??
                Validators.required, Validators.minLength(3)])],
            'email': ['22', Validators.compose([
                Validators.required, Validators.minLength(6)])],
            'password': ['', Validators.compose([
                Validators.required, Validators.minLength(6)])],
            'confirmPassword': ['', Validators.compose([
                Validators.required, Validators.minLength(6)])],
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
}