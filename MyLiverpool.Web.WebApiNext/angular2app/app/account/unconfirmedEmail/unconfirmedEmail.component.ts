import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AccountService } from "../account.service";
import { GlobalValidators } from "../../shared/index";

@Component({
    selector: "unconfirmedEmail",
    templateUrl: "./unconfirmedEmail.component.html"
})

export class UnconfirmedEmailComponent implements OnInit {
    public unconfirmedForm: FormGroup; 
    public finish: boolean;

    constructor(private service: AccountService, private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.unconfirmedForm = this.formBuilder.group({
            'email': ["", Validators.compose([
                Validators.required,
                Validators.minLength(6),
                GlobalValidators.mailFormat])]
        });
    }

    public onSubmit(): void {
        const email = this.unconfirmedForm.controls["email"].value;
        this.service.resendConfirmEmail(email).subscribe(data => {
                if (data) {
                    this.finish = true;
                }
            },
            error => console.log(error),
            () => { }
        );
    }
}