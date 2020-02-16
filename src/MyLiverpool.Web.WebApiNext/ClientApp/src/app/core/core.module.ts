import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { CoreState } from '@core/store';
import { EnsureModuleLoadedOnceGuard } from '@domain/base/ensure-module-loaded-once.guard';
import { MobileLayoutService } from '@layout/modules/mobile-layout/mobile-layout.service';
import { CustomTitleMetaService } from './services';

@NgModule({
    providers: [
        MobileLayoutService,
        CustomTitleMetaService
    ],
    declarations: [],
    imports: [
        CommonModule,
        NgxsModule.forFeature([CoreState])
    ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

    static forRoot(): ModuleWithProviders<CoreModule> {
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
