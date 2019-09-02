import { Routes } from '@angular/router';
import { WishListComponent, WishEditComponent } from '@wishes/pages';
import { WISHES_RU, CREATION_RU } from '@constants/ru.constants';

export const wishRoutes: Routes = [
    { path: '', component: WishListComponent, data: { title: WISHES_RU } },
    { path: ':id/edit', component: WishEditComponent, data: { title: `${CREATION_RU} ${WISHES_RU}` } }
];
