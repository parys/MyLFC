import { Routes } from "@angular/router";
import { AccountSignupComponent, ConfirmEmailComponent, ForgotPasswordComponent, UnconfirmedEmailComponent } from "./index";

export const accountRoutes: Routes = [
    { path: "signup", component: AccountSignupComponent },
    { path: "confirmEmail", component: ConfirmEmailComponent },
    { path: "forgotPassword", component: ForgotPasswordComponent },
    { path: "unconfirmedEmail", component: UnconfirmedEmailComponent }
];