import { Routes } from '@angular/router';

import { RoleGuard, RolesEnum } from '@base/auth';
import { EDITING_RU, INJURIES_RU } from '@constants/ru.constants';

import { InjuryEditComponent } from '@injuries/lazy/injury-edit';
import { InjuryListComponent } from '@injuries/lazy/injury-list';

export const injuryRoutes: Routes = [
    {
        path: '',
        component: InjuryListComponent,
        data: {
            title: INJURIES_RU,
            roles: [RolesEnum[RolesEnum.InfoStart]]
        },
        canActivate: [RoleGuard]
    },
    {
        path: ':id/edit',
        component: InjuryEditComponent,
        data: {
            title: EDITING_RU,
            roles: [RolesEnum[RolesEnum.InfoStart]]
        },
        canActivate: [RoleGuard]
    }
];
