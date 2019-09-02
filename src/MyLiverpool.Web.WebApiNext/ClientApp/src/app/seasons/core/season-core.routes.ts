import { Routes } from '@angular/router';
import { SEASONS_ROUTE } from '@constants/index';

export const seasonCoreRoutes: Routes = [
    {
        path: SEASONS_ROUTE,
        loadChildren: () => import('../lazy/season.module').then(m => m.SeasonModule)
    }
];
