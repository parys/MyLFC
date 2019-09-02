import { Routes } from '@angular/router';

import { RoleGuard, RolesEnum } from '@base/auth';

import { AdminHomeComponent } from '@admin/pages';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminHomeComponent,
        data: { title: 'Admin home', roles: [RolesEnum[RolesEnum.AdminStart]] },
        canActivate: [RoleGuard]
    }
];
