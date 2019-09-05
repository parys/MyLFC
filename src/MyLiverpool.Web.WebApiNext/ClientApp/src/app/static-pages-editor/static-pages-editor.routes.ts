import { Routes } from '@angular/router';

import { PageEditorComponent } from './page-editor';
import { RoleGuard, RolesEnum } from '@base/auth';
import { EDITING_RU } from '@constants/ru.constants';

export const staticPagesEditorRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    {
        path: ':id',
        component: PageEditorComponent,
        data: {
            title: EDITING_RU,
            roles: [RolesEnum[RolesEnum.AdminStart], RolesEnum[RolesEnum.InfoStart]]
        },
        canActivate: [RoleGuard]
    }
];
