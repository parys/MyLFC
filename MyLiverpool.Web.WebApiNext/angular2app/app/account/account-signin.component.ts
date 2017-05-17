import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: "account-signin",
    templateUrl: "./account-signin.component.html"
})

export class AccountSigninComponent implements OnInit {
    private loginForm: FormGroup;

    constructor(private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router) {
    }

    public ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            'username': ["", Validators.required],
            'password': ["", Validators.required]
        });
    }

    public onSubmit(): void {
        let result = this.authService.login(this.loginForm.value).subscribe(data => data, e => {
            if (e._body === "unconfirmed_email") {
                                this.router.navigate(["/unconfirmedEmail"]);
                                return;
                            }});
    }
}