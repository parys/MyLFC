import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { AccountService } from "./account.service";
import { GlobalValidators } from "../shared/index";
import { ResetPassword } from "./resetPassword.model";

@Component({
    selector: "reset-password",
    templateUrl: "./resetPassword.component.html"
})

export class ResetPasswordComponent implements OnInit, OnDestroy {
    resetForm: FormGroup;
    finish: boolean;
    code: string;
    private sub: Subscription;

    constructor(private service: AccountService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            if (params["code"]) {
                this.code = params["code"];
            } else {
                this.router.navigate(["/"]);
            }

        });
        this.resetForm = this.formBuilder.group({
            'email': ["", Validators.compose([
                Validators.required, Validators.minLength(6), GlobalValidators.mailFormat])],
            'password': ["", Validators.compose([
                Validators.required, Validators.minLength(6)])],
            'confirmPassword': ["", Validators.compose([
                Validators.required, Validators.minLength(6)])],
        }, { validator: GlobalValidators.matchingPasswords("password", "confirmPassword") });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(): void {
        let resetPassword = new ResetPassword();
        resetPassword.code = this.code;
        resetPassword.email = this.resetForm.controls["email"].value;
        resetPassword.password = this.resetForm.controls["password"].value;
        resetPassword.confirmPassword = this.resetForm.controls["confirmPassword"].value;
        this.service.resetPassword(resetPassword).subscribe(data => data,
            error => console.log(error),
            () => { }
        );
        this.finish = true;
    }
}