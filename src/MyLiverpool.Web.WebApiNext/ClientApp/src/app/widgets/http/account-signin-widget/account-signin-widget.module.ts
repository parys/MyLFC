import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { AccountSigninWidgetComponent } from './account-signin-widget.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AccountSigninWidgetComponent
    ],
    exports: [
        AccountSigninWidgetComponent,
    ]
})
export class AccountSigninWidgetModule { }
