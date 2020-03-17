import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractEditPageComponent, ContractsListPageComponent, CurrentContractsListPageComponent } from '@contracts/pages';
import { ContractResolver } from '@contracts/resolvers';
import { RolesEnum } from '@auth/models/roles.enum';
import { RoleGuard } from '@auth/guards';
import { EDITING_RU } from '@constants/ru.constants';


const routes: Routes = [
    {
        path: '',
        component: ContractsListPageComponent,
        data: {
            title: 'Контракты',
            roles: [RolesEnum[RolesEnum.InfoStart]]
        },
        canActivate: [RoleGuard]
    },
    {
        path: ':id/edit',
        component: ContractEditPageComponent,
        data: {
            title: EDITING_RU,
            roles: [RolesEnum[RolesEnum.InfoStart]]
        },
        canActivate: [RoleGuard],
        resolve: { ContractResolver }
    },
    {
        path: 'current',
        component: CurrentContractsListPageComponent,
        data: {
            title: 'Контракты и зарплаты ФК Ливерпуль',
            keywords: 'Контракты Ливерпуля, зарплаты, зарплатная ведомость',
            description: 'Контракты Ливерпуля. Зарплатная ведомость клуба. Зарплаты игроков'

        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [
        ContractResolver
    ],
    exports: [RouterModule]
})
export class ContractsRoutingModule { }
