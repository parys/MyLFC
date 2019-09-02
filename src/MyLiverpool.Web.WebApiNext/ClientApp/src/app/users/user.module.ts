import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '@shared/index';
import { RoleGroupCoreModule } from '@role-groups/core';
import { BreadcrumbService } from '@shared/breadcrumb';
import { USERS_ROUTE } from '@constants/routes.constants';
import { PmSharedModule } from '@pms/shared';
import { PipesModule } from '@base/pipes';
import { userRoutes } from './user.routes';
import { UserEditComponent } from '@users/pages/user-edit';
import { UserListComponent } from '@users/pages/user-list';
import { UserService } from '@users/user.service';
import { UserDetailComponent } from '@users/pages/user-detail';
import { UserConfigComponent } from '@users/pages/user-config';
import { USERS_RU, USER_RU } from '@constants/ru.constants';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(userRoutes),
        RoleGroupCoreModule,
        MatNativeDateModule,
        MatInputModule,
        MatDatepickerModule,
        MatTableModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSortModule,
        PmSharedModule,
        PipesModule
    ],
    declarations: [
        UserDetailComponent,
        UserConfigComponent,
        UserEditComponent,
        UserListComponent
    ],
    providers: [
        UserService
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
