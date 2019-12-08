import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountSigninWidgetModule } from '@widgets/http/account-signin-widget';

import { AccountSigninPageComponent } from './account-signin-page.component';
import { accountSigninPageRoutes } from './account-signin-page.routes';

@NgModule({
    imports: [
        RouterModule.forChild(accountSigninPageRoutes),
        AccountSigninWidgetModule
    ],
    declarations: [
        AccountSigninPageComponent
    ]
})
export class AccountSigninPageModule {

 }
