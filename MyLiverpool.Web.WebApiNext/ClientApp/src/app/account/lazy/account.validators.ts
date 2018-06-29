import { FormControl, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { AccountService } from "../core";
import { Configuration } from "@app/app.constants";
import { debounceTime, takeUntil, take, switchMap } from "rxjs/operators";

@Injectable()
export class AccountValidators {
    static service: AccountService;
    static config: Configuration;
    static changed = new Subject<any>();
    static changed1 = new Subject<any>();

    constructor(private service1: AccountService
    ) {
        AccountValidators.service = service1;
        AccountValidators.config = new Configuration();
    }

    public isEmailUnique(control: FormControl): Observable<IValidationResult> {
        AccountValidators.changed.next();
        return new Observable((obs: any) => {
            control
                .valueChanges.pipe(
                debounceTime(AccountValidators.config.debounceTime),                
                takeUntil(AccountValidators.changed),
                take(1),
                switchMap((value: string) => AccountValidators.service.isEmailUnique(value))
                )
                .subscribe(
                data => {
                    if (+control.value.length < AccountValidators.config.minEmailLength || data) {  
                        obs.next(null);
                    } else {
                        obs.next({ "notUniqueEmail": true });
                    }
                    obs.complete();
                },
                error => {
                    console.log(error);
                    obs.complete();
                });
        });
    }

    public isUserNameUnique(control: FormControl): Observable<IValidationResult> {
        AccountValidators.changed1.next();
        return new Observable((obs: any) => {
            control
                .valueChanges.pipe(
                debounceTime(AccountValidators.config.debounceTime),
                takeUntil(AccountValidators.changed1),
                take(1),//todo
                switchMap((value: string) => AccountValidators.service.isUserNameUnique(value))
                )
                .subscribe(
                data => {
                    if (+control.value.length < AccountValidators.config.minUserNameLength || data) {
                        obs.next(null);
                    } else {
                        obs.next({ "notUniqueUserName": true });
                    }
                    obs.complete();
                },
                error => {
                    console.log(error);
                    obs.complete();
                });
        });
    }

    static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): IValidationResult => {
            const password = group.controls[passwordKey];
            const confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    "mismatchedPasswords": true
                };
            }
            return null;
        };
    }
}

interface IValidationResult {
    [key: string]: boolean;
}