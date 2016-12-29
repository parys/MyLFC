import { Injectable } from "@angular/core";
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from "@angular/router";
import { RolesCheckedService } from "../shared/index";  
import { Observable } from "rxjs/Observable";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private rolesService: RolesCheckedService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.rolesService.checkRoles().isLogined) { return false; }

        const roles: string[] = route.data["role"] as Array<string>;
        if (roles == null || roles.length === 0) {
            return true;
        }

        for (let i: number = 0; i < roles.length; i++) {
            if (this.rolesService.isUserInRole(roles[i])) {
                return true;
            }
        }

        this.router.navigate(["/"]);
        return false;
    }
}