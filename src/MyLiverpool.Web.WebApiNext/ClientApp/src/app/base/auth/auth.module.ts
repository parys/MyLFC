import { NgModule, ModuleWithProviders, Optional, SkipSelf, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';

import { HttpWrapperModule } from '@base/httpWrapper';
import { StorageService } from '@base/storage';

import { EnsureModuleLoadedOnceGuard } from '@domain/base/ensure-module-loaded-once.guard';
import { LoaderService } from '@base/loader';

import { AuthHeadersInterceptor } from './bearer.interceptor';
import { AuthService } from '@auth/services';
import { RoleGuard, UnSignedGuard } from '@auth/guards';
import { AuthState } from '@auth/store';

export function getAccessToken(injector: Injector): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {

        const authService = injector.get(AuthService);
        // if (await authService.init()) {
        //     return resolve(true);
        // } else {
        //     authService.logout();
        // }
        try {
            await authService.init();
        }
        catch {
            authService.logout();
        }
        return resolve(true);
    });
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpWrapperModule,
        NgxsModule.forFeature([AuthState])
    ]
})
export class AuthModule extends EnsureModuleLoadedOnceGuard {

    static forRoot(): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [
                AuthService,
                RoleGuard,
                UnSignedGuard,
              //  { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true, deps: [StorageService, LoaderService] },
                { provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptor, multi: true },
            ],
        };
    }

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: AuthModule,
    ) {
        super(parentModule);
    }
}
