import { Routes }         from "@angular/router";
import { AuthGuard, AuthService }      from "./index";
import { AccountSignupComponent } from "../account/account-signup.component";

export const authRoutes: Routes = [                                                             
];
export const authProviders = [
    AuthGuard,
    AuthService
];