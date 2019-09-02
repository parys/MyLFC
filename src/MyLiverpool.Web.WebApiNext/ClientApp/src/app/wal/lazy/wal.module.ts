import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, BreadcrumbService } from '@shared/index';
import { WAL_ROUTE, WAL_RU } from '@constants/index';

import { WalMainComponent } from '@wal/lazy/wal-main';
import { walRoutes } from '@wal/lazy/wal.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(walRoutes)
    ],
    declarations: [
        WalMainComponent
    ]
})
export class WalModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${WAL_ROUTE}`, WAL_RU);
    }
}
