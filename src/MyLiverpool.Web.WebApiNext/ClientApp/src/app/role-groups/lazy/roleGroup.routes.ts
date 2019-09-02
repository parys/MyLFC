import { Routes } from '@angular/router';
import { RoleGuard, RolesEnum } from '@base/auth';
import { RoleGroupListComponent } from '@role-groups/lazy/roleGroup-list';

export const roleGroupRoutes: Routes = [
    {
        path: '',
        component: RoleGroupListComponent,
        data: {
            title: 'Группы и роли',
            roles: [RolesEnum[RolesEnum.AdminStart]]
        },
        canActivate: [RoleGuard]
    }
];
