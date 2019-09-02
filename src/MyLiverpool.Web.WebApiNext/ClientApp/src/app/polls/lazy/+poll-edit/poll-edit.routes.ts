import { Routes } from '@angular/router';

import { PollEditComponent } from './poll-edit.component';
import { RoleGuard, RolesEnum } from '@base/auth';
import { EDITING_RU } from '@constants/index';

export const pollEditRoutes: Routes = [
    {
        path: '',
        component: PollEditComponent,
        data: {
            title: EDITING_RU,
            roles: [RolesEnum[RolesEnum.NewsStart], RolesEnum[RolesEnum.BlogStart]]
        },
        canActivate: [RoleGuard]
    }
];
