import { Injectable } from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngxs/store';
import { AuthState } from '../store';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private store: Store,
                private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot,
                       state: RouterStateSnapshot): boolean {

        const authState = this.store.selectSnapshot(AuthState);

        if (authState.user != null) {
            const roles: string[] = route.data.role as Array<string>;
            if (roles == null || roles.length === 0) {
                return true;
            }

            for (const role of roles) {
                if (this.isUserInRole(authState.user.roles, role)) {
                    return true;
                }
            }
        }
        this.router.navigate(['/']);
        return false;
    }

    private isUserInRole(roles: string[], role: string): boolean {
        if (roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }
}
