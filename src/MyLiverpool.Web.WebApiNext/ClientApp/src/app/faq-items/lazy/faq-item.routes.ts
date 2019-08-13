import { Routes } from '@angular/router';

import { RoleGuard } from '@app/+auth';
import { EDITING_RU, FAQ_ITEMS_RU, EDIT_ROUTE } from '@app/+constants';

import { FaqItemListComponent } from './faq-item-list';
import { FaqItemEditComponent } from './faq-item-edit';

export const faqItemRoutes: Routes = [
    { path: '', component: FaqItemListComponent, data: { title: FAQ_ITEMS_RU } },
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
    }
];
