import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { RoleGroupCoreModule } from '@role-groups/core';
import { BreadcrumbService } from '@base/breadcrumbs';
import { USERS_ROUTE } from '@constants/routes.constants';
import { PmSharedModule } from '@pms/shared';
import { PipesModule } from '@base/pipes';
import { USERS_RU, USER_RU } from '@constants/ru.constants';

import { userRoutes } from '@users/user.routes';
import { UserEditComponent } from '@users/pages/user-edit';
import { UserListComponent } from '@users/pages/user-list';
import { UserService } from '@users/user.service';
import { UserDetailComponent } from '@users/pages/user-detail';
import { UserConfigComponent } from '@users/pages/user-config';
import { UserMaterialModule } from '@users/user-material.module';

import { UsersState } from '@users/store';
import { UsersFilterComponent, ChangeRoleGroupDialogComponent } from '@users/components';
import { UserResolver } from './resolvers';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        RoleGroupCoreModule,
        PmSharedModule,
        PipesModule,
        UserMaterialModule,
        NgxsModule.forFeature([UsersState])
    ],
    declarations: [
        UserDetailComponent,
        UserConfigComponent,
        UserEditComponent,
        UserListComponent,
        UsersFilterComponent,
        ChangeRoleGroupDialogComponent
    ],
    providers: [
        UserService,
        UserResolver
    ],
    entryComponents: [
        ChangeRoleGroupDialogComponent
    ]
})
export class UserModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${USERS_ROUTE}`, USERS_RU);
        this.breadcrumbService.addFriendlyNameForRouteRegex(`^/${USERS_ROUTE}/[0-9]+$`, USER_RU);
        this.breadcrumbService.addFriendlyNameForRouteRegex(`^/${USERS_ROUTE}/[0-9]+/settings$`, 'Настройки');
    }
}
