import { Routes } from '@angular/router';

import { RoleGuard, RolesEnum } from '@base/auth';
import { CLUBS_RU, EDIT_ROUTE } from '@constants/index';

import { ClubListComponent } from '@clubs/pages/club-list';
import { ClubEditComponent } from '@clubs/pages/club-edit';

export const clubRoutes: Routes = [
    {
        path: '',
        component: ClubListComponent,
        data: { title: CLUBS_RU, roles: [RolesEnum[RolesEnum.AdminStart]] },
        canActivate: [RoleGuard]
    },
    {
        path: ':id/edit',
        component: ClubEditComponent,
        data: { title: EDIT_ROUTE, roles: [RolesEnum[RolesEnum.AdminStart]] },
        canActivate: [RoleGuard]
    }
];
