import { Routes } from '@angular/router';

import { RoleGuard } from '@base/auth';
import { FaqCategoryListComponent } from './faq-category-list';
import { FaqCategoryEditComponent } from './faq-category-edit';
import { FAQ_CATEGORIES_RU, EDITING_RU } from '@constants/ru.constants';
import { EDIT_ROUTE } from '@constants/routes.constants';

export const faqCategoryRoutes: Routes = [
    { path: '', component: FaqCategoryListComponent, data: { title: FAQ_CATEGORIES_RU } },
    {
        path: ':id',
        children: [
            {
                path: EDIT_ROUTE,
                component: FaqCategoryEditComponent,
                data: { title: EDITING_RU },
                canActivate: [RoleGuard]
            }
        ]
    }
];
