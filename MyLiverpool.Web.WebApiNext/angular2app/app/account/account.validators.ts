import { FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { AccountService } from "./account.service";

@Injectable()
export class AccountValidators {
    static service: AccountService;
    static changed = new Subject<any>();
    static changed1 = new Subject<any>();

    constructor(private service1: AccountService) {
        AccountValidators.service = service1;
    }

    isEmailUnique(control: FormControl): Observable<IValidationResult> {
        AccountValidators.changed.next();
        return new Observable((obs: any) => {
            control
                .valueChanges
                .debounceTime(400)        // todo moove magic number to constants                
                .takeUntil(AccountValidators.changed)
                .take(1)
                .switchMap((value: string) => AccountValidators.service.isEmailUnique(value))
                .subscribe(
                data => {
                    if (+control.value.length < 6 || data) {  // todo moove magic number to constants   
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

    isUserNameUnique(control: FormControl): Observable<IValidationResult> {
        AccountValidators.changed1.next();
        return new Observable((obs: any) => {
            control
                .valueChanges
                .debounceTime(400)        // todo moove magic number to constants                
                .takeUntil(AccountValidators.changed1)
                .take(1)
                .switchMap((value: string) => AccountValidators.service.isUserNameUnique(value))
                .subscribe(
                data => {
                    if (+control.value.length < 3 || data) {  // todo moove magic number to constants   
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
}

interface IValidationResult {
    [key: string]: boolean;
}