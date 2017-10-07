import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AccountService } from "../account.service";    
import { GlobalValidators } from "../../shared/index";
import { ChangePassword } from "../changePassword.model";
import { MatSnackBar } from "@angular/material";

@Component({
    selector: "change-password",
    templateUrl: "./changePassword.component.html"
})

export class ChangePasswordComponent implements OnInit {
    public passwordForm: FormGroup;
    public isHuman: boolean = false;

    constructor(private service: AccountService,
        private snackBar: MatSnackBar,
        private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.passwordForm = this.formBuilder.group({
            oldPassword: ["", Validators.compose([
                Validators.required, Validators.minLength(6)])],
            newPassword: ["", Validators.compose([
                Validators.required, Validators.minLength(6)])],
            confirmPassword: ["", Validators.compose([
                Validators.required, Validators.minLength(6)])]
        }, { validator: GlobalValidators.matchingPasswords("newPassword", "confirmPassword") });
    }

    public onSubmit(): void {
        const model: ChangePassword = this.passwordForm.value;

        this.service.changePassword(model).subscribe(data => {
            if (data) {
                this.snackBar.open("Пароль успешно изменен.", null, { duration: 5000 });
            } else {
                this.snackBar.open("Пароль НЕ БЫЛ изменен.", null, { duration: 5000 });
            }
            },
            error => {
                console.log(error);
                this.snackBar.open("Пароль НЕ БЫЛ изменен.", null, { duration: 5000 });
            });
        this.isHuman = false;
    }
}