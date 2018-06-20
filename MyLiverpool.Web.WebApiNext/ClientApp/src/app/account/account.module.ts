import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { accountRoutes } from "./account.routes";
import { AccountSigninComponent } from "./account-signin/index";
import { AccountSignupComponent } from "./account-signup/index";
import { ChangePasswordComponent } from "./changePassword/index";
import { ConfirmEmailComponent } from "./confirmEmail.component";
import { ForgotPasswordComponent } from "./forgotPassword/index";
import { ResetPasswordComponent } from "./resetPassword/index";
import { UnconfirmedEmailComponent } from "./unconfirmedEmail/index";
import { AccountService } from "./account.service";
import { AccountValidators } from "./account.validators";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(accountRoutes)
    ],
    declarations: [
        AccountSigninComponent,
        AccountSignupComponent,
        ChangePasswordComponent,
        ConfirmEmailComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        UnconfirmedEmailComponent,
    ],
    exports: [
        AccountSigninComponent,
    ],
    providers: [
        AccountService,
        AccountValidators,
    ]
})
export class AccountModule { }