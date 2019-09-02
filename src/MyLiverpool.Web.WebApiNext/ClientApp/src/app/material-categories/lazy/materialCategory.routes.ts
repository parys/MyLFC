import { Routes } from '@angular/router';
import { MaterialCategoryListComponent } from '@material-categories/lazy/materialCategory-list';
import { MaterialCategoryEditComponent } from '@material-categories/lazy/materialCategory-edit';
import { RoleGuard, RolesEnum } from '@base/auth';

export const materialCategoryRoutes: Routes = [
    { path: '', component: MaterialCategoryListComponent },
    {
        path: ':id/edit',
        component: MaterialCategoryEditComponent,
        data: { roles: [RolesEnum[RolesEnum.NewsFull], RolesEnum[RolesEnum.BlogFull]] },
        canActivate: [RoleGuard]
    }
];
