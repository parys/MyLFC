import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { Store } from '@ngxs/store';
import { AuthState } from '@auth/store';

@Injectable()
export class UnSignedGuard implements CanActivate {
    constructor(private store: Store, private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const authState = this.store.selectSnapshot(AuthState);
        if (authState.user != null || authState.tokens != null) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
