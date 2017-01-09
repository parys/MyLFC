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
        if (+control.value.length < 6) { //todo moove magic number to constants   
            return null;
        } else {
            AccountValidators.service.isEmailUnique(control.value)
                .subscribe(result => {
                    if (!result) {
                        return { "notUniqueEmail": true };
                    }
                },
                error => console.log(error),
                () => { });
        }
    }

    isUserNameUnique(control: FormControl): IValidationResult {
        if (+control.value.length < 3) { //todo moove magic number to constants     
            console.log(1); 
            return null;
        } else {
            console.log(2);
            AccountValidators.service.isUserNameUnique(control.value)
                .subscribe(result => {
                    if (!result) {
                        return { "notUniqueUserName": true };
                    }
                },
                error => console.log(error));
            console.log(3); 
        }
        console.log(4); 
    }
}

interface IValidationResult {
    [key: string]: boolean;
}