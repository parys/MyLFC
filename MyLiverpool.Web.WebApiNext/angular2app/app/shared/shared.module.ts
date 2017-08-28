import { NgModule } from "@angular/core";
import { RecaptchaComponent } from "./recaptcha.component";
import { HttpWrapper } from "./httpWrapper";
import { StorageService } from "./storage.service";
import { LocalStorage } from "./local-storage";
import { RolesCheckedService } from "./roles-checked.service";
import { GlobalValidators } from "./globalValidators";
import { ReCaptchaModule } from "angular2-recaptcha";
import { DeleteDialogComponent } from "./delete-dialog.component";
import { MdButtonModule } from "@angular/material";
import { LoaderComponent } from "./loader.component";
import { LoaderService } from "./loader.service";

export function getStorage() {
    const result = typeof window !== 'undefined' ? window.localStorage : null;
    return result;
}

@NgModule({
    imports: [
        ReCaptchaModule, 
        MdButtonModule
    ],
    declarations: [
        DeleteDialogComponent,
        RecaptchaComponent,
        LoaderComponent
    ],
    exports: [
        DeleteDialogComponent,
        RecaptchaComponent
    ],
    providers: [
        GlobalValidators,
        HttpWrapper,
        StorageService,
        RolesCheckedService,
        LoaderService,
        { provide: LocalStorage, useFactory: getStorage }
    ],
    entryComponents: [
        DeleteDialogComponent
    ]
})
export class SharedModule { }  