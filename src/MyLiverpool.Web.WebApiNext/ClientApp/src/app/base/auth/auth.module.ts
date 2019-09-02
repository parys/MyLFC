import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpWrapperModule } from '@base/httpWrapper';
import { StorageModule } from '@base/storage';

import { AuthService, RoleGuard, UnSignedGuard, RolesCheckedService } from '@base/auth';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpWrapperModule,
        StorageModule
    ],
    providers: [
        AuthService,
        RoleGuard,
        UnSignedGuard,
        RolesCheckedService,
    ]
})
export class AuthModule { }
