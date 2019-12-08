import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'account-signin-page',
    templateUrl: './account-signin-page.component.html',
    styleUrls: ['./account-signin-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AccountSigninPageComponent {
    constructor(public router: Router) {

    }

    public onSigned(): void {
        this.router.navigate(['/']);
    }
}
