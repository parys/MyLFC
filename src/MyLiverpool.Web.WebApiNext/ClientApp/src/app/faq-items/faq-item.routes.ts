import { Routes } from '@angular/router';

import { RoleGuard } from '@base/auth';
import { EDITING_RU, EDIT_ROUTE } from '@constants/index';

import { FaqItemEditComponent } from './faq-item-edit';

export const faqItemRoutes: Routes = [
    // { path: '', component: FaqItemListComponent, data: { title: FAQ_ITEMS_RU } },
    {
        path: ':id',
        children: [
            {
                path: EDIT_ROUTE,
                component: FaqItemEditComponent,
                data: { title: EDITING_RU },
                canActivate: [RoleGuard]
            }
        ]
    },
    { path: '**', redirectTo: '/faq' }
];
