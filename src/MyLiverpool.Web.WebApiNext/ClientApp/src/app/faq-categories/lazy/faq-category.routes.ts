import { Routes } from '@angular/router';
import { RoleGuard } from '@app/+auth';
import { FaqCategoryListComponent } from './faq-category-list';
import { FaqCategoryEditComponent } from './faq-category-edit';
import { EDITING_RU, FAQ_CATEGORIES_RU, EDIT_ROUTE } from '@app/+constants';

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
