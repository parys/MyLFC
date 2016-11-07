import { FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class GlobalValidators {

    static mailFormat(control: FormControl): IValidationResult {
        const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (control.value !== "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    }
}

interface IValidationResult {
    [key: string]: boolean;
}