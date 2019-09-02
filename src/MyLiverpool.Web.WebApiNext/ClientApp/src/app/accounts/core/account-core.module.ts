import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/index';
import { AccountSigninComponent } from './account-signin';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        AccountSigninComponent
    ],
    exports: [
        AccountSigninComponent,
    ],
    providers: [
    ]
})
export class AccountCoreModule { }
