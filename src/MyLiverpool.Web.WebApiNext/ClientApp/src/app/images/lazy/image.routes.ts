import { Routes } from '@angular/router';

import { RoleGuard, RolesEnum } from '@base/auth';

import { ImageAdditionComponent } from '@images/core';
import { ImageListComponent } from '@images/lazy/image-list';

export const imageRoutes: Routes = [
    {
        path: '',
        component: ImageListComponent,
        data: { title: 'Изображения', roles: [RolesEnum[RolesEnum.NewsStart], RolesEnum[RolesEnum.BlogStart]] },
        canActivate: [RoleGuard]
    },
    {
        path: 'add',
        component: ImageAdditionComponent,
        data: { title: 'Загрузка изображений', roles: [RolesEnum[RolesEnum.NewsStart], RolesEnum[RolesEnum.BlogStart]] },
        canActivate: [RoleGuard]
    }
];
