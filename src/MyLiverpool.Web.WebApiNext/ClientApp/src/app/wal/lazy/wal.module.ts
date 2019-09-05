import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, BreadcrumbService } from '@shared/index';
import { WAL_ROUTE, WAL_RU } from '@constants/index';

import { WalMainComponent } from '@wal/lazy/wal-main';
import { walRoutes } from '@wal/lazy/wal.routes';
import { StaticPagesModule } from '@static-pages/static-pages.module';

@NgModule({
    imports: [
        SharedModule, // todo does it need
        RouterModule.forChild(walRoutes),
        StaticPagesModule
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
