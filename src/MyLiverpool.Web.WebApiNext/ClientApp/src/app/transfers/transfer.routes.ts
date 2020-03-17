import { Routes } from '@angular/router';

import { TransferEditComponent } from '@transfers/pages/transfer-edit';
import { TransferListComponent } from '@transfers/pages/transfer-list';
import { TransferCurrentListComponent } from '@transfers/pages/transfer-current-list';
import { RoleGuard, RolesEnum } from '@base/auth';
import { EDITING_RU, TRANSFERS_RU } from '@constants/ru.constants';

export const transferRoutes: Routes = [
    {
        path: '',
        component: TransferListComponent,
        data: {
            title: TRANSFERS_RU,
            roles: [RolesEnum[RolesEnum.InfoStart]]
        },
        canActivate: [RoleGuard]
    },
    {
        path: ':id/edit',
        component: TransferEditComponent,
        data: {
            title: EDITING_RU,
            roles: [RolesEnum[RolesEnum.InfoStart]]
        },
        canActivate: [RoleGuard]
    },
    {
        path: 'current',
        component: TransferCurrentListComponent,
        data: {
            title: TRANSFERS_RU,
            keywords: 'Трансферы Ливерпуля, аренда, переход',
            description: 'Трансферы Ливерпуля. Арендованные игроки. Переходы в другие клубы.'
        }
    }
];
