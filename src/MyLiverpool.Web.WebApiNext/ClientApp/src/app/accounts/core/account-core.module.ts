import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/index';
import { AccountSigninComponent } from './account-signin';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        MatButtonModule
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
