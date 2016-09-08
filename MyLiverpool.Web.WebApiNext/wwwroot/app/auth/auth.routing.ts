import { Routes }         from '@angular/router';
import { AuthGuard }      from './auth-guard.service';
import { AuthService }    from './auth.service';
import {AccountSignupComponent} from "../account/account-signup.component";

export const authRoutes: Routes = [
    { path: 'signup', component: AccountSignupComponent } //todo, canActivate: [AuthGuard]  }
];
export const authProviders = [
    AuthGuard,
    AuthService
];