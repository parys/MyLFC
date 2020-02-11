import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { CoreState } from '@core/store';
import { EnsureModuleLoadedOnceGuard } from '@domain/base/ensure-module-loaded-once.guard';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgxsModule.forFeature([CoreState])
    ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
        };
    }

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule,
    ) {
        super(parentModule);
    }
}
