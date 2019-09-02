import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';

import { RolesCheckedService } from '@base/auth/roles-checked.service';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private rolesService: RolesCheckedService,
                private router: Router,
                private location: Location) { }

    public canActivate(route: ActivatedRouteSnapshot,
                       state: RouterStateSnapshot): boolean {

        if (this.rolesService.isLogined) {
            const roles: string[] = route.data.role as Array<string>;
            if (roles == null || roles.length === 0) {
                return true;
            }

            for (const role of roles) {
                if (this.rolesService.isUserInRole(role)) {
                    return true;
                }
            }
        }

        this.location.replaceState('/');
        this.router.navigate(['/']);
        return false;
    }
}
