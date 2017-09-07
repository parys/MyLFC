import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecaptchaComponent } from "./recaptcha.component";
import { HttpWrapper } from "./httpWrapper";
import { StorageService } from "./storage.service";
import { LocalStorage } from "./local-storage";
import { RolesCheckedService } from "./roles-checked.service";
import { GlobalValidators } from "./globalValidators";
import { ReCaptchaModule } from "angular2-recaptcha";
import { DeleteDialogComponent } from "./delete-dialog/index";
import { MdButtonModule } from "@angular/material";
import { LoaderComponent } from "./loader.component";
import { LoaderService } from "./loader.service";
import { BearerInterceptor } from "./bearer.interceptor";

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
        { provide: LocalStorage, useFactory: getStorage },
        { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true }
    ],
    entryComponents: [
        DeleteDialogComponent
    ]
})
export class SharedModule { }  