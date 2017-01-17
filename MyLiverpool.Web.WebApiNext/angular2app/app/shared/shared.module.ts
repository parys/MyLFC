import { NgModule } from "@angular/core";
import { RecaptchaComponent } from "./recaptcha.component";
import { HttpWrapper } from "./httpWrapper";
import { LocalStorageService } from "./localStorage.service";
import { LocalStorage } from "./local-storage";
import { RolesCheckedService } from "./roles-checked.service";
import { GlobalValidators } from "./globalValidators";
import { ReCaptchaModule } from "angular2-recaptcha";

@NgModule({
    imports: [
        ReCaptchaModule
    ],
    declarations: [
        RecaptchaComponent
    ],
    exports: [
        RecaptchaComponent
    ],
    providers: [
        GlobalValidators,
        HttpWrapper,
        LocalStorageService,
        RolesCheckedService,
        { provide: LocalStorage, useFactory: () => (window) ? window.localStorage : {} }
    ]
})
export class SharedModule { }

/*                                 
import * from "./local-storage";             */