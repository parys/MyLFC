import { Routes } from '@angular/router';

import { RoleGuard } from '@base/auth';
import { EDIT_ROUTE } from '@constants/index';

import { PmListComponent } from '@pms/lazy/pm-list';
import { PmDetailComponent } from '@pms/lazy/pm-detail';
import { PmEditComponent } from '@pms/lazy/pm-edit';

export const pmRoutes: Routes = [
    { path: '', component: PmListComponent, data: { title: 'Личные сообщения' }, canActivate: [RoleGuard] },
    {
        path: ':id',
        children: [
            { path: '', component: PmDetailComponent, data: { title: 'Cообщение' }, canActivate: [RoleGuard] },
            {
                path: EDIT_ROUTE,
                component: PmEditComponent,
                data: { title: 'Написание личного сообщения' },
                canActivate: [RoleGuard]
            }
        ]
    }
];
