import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '@app/shared';
import { userRoutes } from './user.routes';
import { UserEditComponent } from './pages/user-edit';
import { UserListComponent } from './pages/user-list';
import { UserService } from '@users/user.service';
import { UserDetailComponent } from './pages/user-detail';
import { UserConfigComponent } from './pages/user-config';
import { RoleGroupCoreModule } from '@role-groups/core';
import { BreadcrumbService } from '@app/shared/breadcrumb';
import { USERS_ROUTE, USERS_RU, USER_RU } from '@app/+constants';
import { PmSharedModule } from '@pms/shared';
import { PipesModule } from '@base/pipes';

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
