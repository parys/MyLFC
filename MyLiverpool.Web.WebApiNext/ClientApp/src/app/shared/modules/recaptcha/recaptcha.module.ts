import { NgModule } from "@angular/core";
import { RecaptchaComponent } from "./recaptcha.component";
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
    ]
})
export class RecaptchaModule { }  