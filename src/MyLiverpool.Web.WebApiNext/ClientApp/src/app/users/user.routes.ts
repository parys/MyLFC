import { Routes } from '@angular/router';
import { RoleGuard } from '@base/auth';
import { UserDetailComponent } from '@users/pages/user-detail';
import { UserListComponent } from './pages/user-list';
import { UserConfigComponent } from './pages/user-config';
import { UserEditComponent } from './pages/user-edit';
import { USERS_RU, EDITING_RU, USER_RU } from '@constants/ru.constants';
import { EDIT_ROUTE } from '@constants/routes.constants';
import { UserResolver } from '@users/resolvers';

export const userRoutes: Routes = [
    { path: '', component: UserListComponent, data: { title: USERS_RU } },
    {
        path: ':id',
        children: [
            {
                path: '',
                component: UserDetailComponent,
                data: { title: USER_RU },
                resolve: { UserResolver }
            },
            {
                path: 'settings',
                component: UserConfigComponent,
                data: { title: 'Настройки' },
                canActivate: [RoleGuard]
            },
            {
                path: EDIT_ROUTE,
                component: UserEditComponent,
                data: { title: EDITING_RU },
                canActivate: [RoleGuard]
            }
        ]
    }
];
