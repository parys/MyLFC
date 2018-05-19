import { FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class GlobalValidators {
    static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): IValidationResult => {
            const password = group.controls[passwordKey];
            const confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    "mismatchedPasswords" : true
                };
            }
            return null;
        };
    }
}

interface IValidationResult {
    [key: string]: boolean;
}