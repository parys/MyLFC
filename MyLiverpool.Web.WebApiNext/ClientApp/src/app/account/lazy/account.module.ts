import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { accountRoutes } from "./account.routes";
import { AccountSignupComponent } from "./account-signup";
import { ChangePasswordComponent } from "./changePassword";
import { ConfirmEmailComponent } from "./confirmEmail";
import { ForgotPasswordComponent } from "./forgotPassword";
import { ResetPasswordComponent } from "./resetPassword";
import { UnconfirmedEmailComponent } from "./unconfirmedEmail";
import { AccountValidators } from "./account.validators";
import { AccountCoreModule } from "../core";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(accountRoutes),
        AccountCoreModule
    ],
    declarations: [
        AccountSignupComponent,
        ChangePasswordComponent,
        ConfirmEmailComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        UnconfirmedEmailComponent
    ],
    providers: [
        AccountValidators
    ]
})
export class AccountModule { }