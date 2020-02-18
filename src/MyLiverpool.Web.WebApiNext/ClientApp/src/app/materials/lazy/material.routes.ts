﻿import { Routes } from '@angular/router';
import { MaterialDetailComponent } from './material-detail';
import { MaterialListComponent } from './material-list';
import { EDIT_ROUTE } from '@constants/routes.constants';
import { MaterialResolver } from './resolvers';

export const materialRoutes: Routes = [
    {
        path: '',
        component: MaterialListComponent
    },
    {
        path: ':id',
        children: [
            {
                path: '',
                component: MaterialDetailComponent,
                data: {
                    ogType: 'article'
                },
                resolve: { MaterialResolver }
            },
            {
                path: EDIT_ROUTE,
                loadChildren: () => import('./+material-edit/material-edit.module').then(m => m.MaterialEditModule)
            }
        ]
    }
];
