import { Routes } from '@angular/router';
import { UnSignedGuard } from '@base/auth';
import { AccountSigninPageComponent } from './account-signin-page.component';

export const accountSigninPageRoutes: Routes = [
    {
        path: '',
        component: AccountSigninPageComponent,
        data: { title: 'Войти в аккаунт' },
        canActivate: [UnSignedGuard]
    }
];
