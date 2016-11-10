import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: "account-signin",
    template: require("./account-signin.component.html")
})

export class AccountSigninComponent implements OnInit {

    loginForm: FormGroup;
    userName: string;
    password: string;

    constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'userName': ["", Validators.compose([
                Validators.required])],
            'password': ["", Validators.compose([
                Validators.required])]
        });
    }

    onSubmit(ra: any): void {
        this.userName = this.loginForm.controls["userName"].value;
        this.password = this.loginForm.controls["password"].value;
        let result = this.authService.login(this.userName, this.password);
    }
}