import { FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";
import { AccountService } from "./account.service";

@Injectable()
export class AccountValidators {
    static service: AccountService;
    constructor(private service1: AccountService) {
        AccountValidators.service = service1;
    }

    isEmailUnique(control: FormControl): IValidationResult {
        if (control.value === "" || +control.value.length <= 6) { //todo moove magic number to constants
            return null;
        }

        AccountValidators.service.isEmailUnique(control.value)
            .subscribe(result => {
                    if (result) {
                        return null;
                    }
                },
                error => console.log(error),
                () => {});

        return { "isNotUniqueEmail": true };
    }


    isUserNameUnique(control: FormControl): IValidationResult {
        if (control.value === "" || +control.value.length <= 3) { //todo moove magic number to constants
            return null;
        }

        AccountValidators.service.isUserNameUnique(control.value)
            .subscribe(result => {
                    if (result) {
                        return null;
                    }
                },
                error => console.log(error),
                () => {});

        return { "isNotUniqueUserName": true };
    }
}

interface IValidationResult {
    [key: string]: boolean;
}