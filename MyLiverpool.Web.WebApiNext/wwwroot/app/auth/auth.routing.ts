import { Routes }         from "@angular/router";
import { AuthGuard, AuthService }      from "./index";
import { AccountSignupComponent } from "../account/account-signup.component";

export const authRoutes: Routes = [
    { path: "signup", component: AccountSignupComponent } // todo, canActivate: [AuthGuard]  }
];
export const authProviders = [
    AuthGuard,
    AuthService
];