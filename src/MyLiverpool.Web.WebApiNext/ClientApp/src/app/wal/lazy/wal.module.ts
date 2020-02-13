import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbService } from '@base/breadcrumbs';
import { WAL_ROUTE, WAL_RU } from '@constants/index';

import { WalMainComponent } from '@wal/lazy/wal-main';
import { walRoutes } from '@wal/lazy/wal.routes';
import { StaticPagesModule } from '@static-pages/static-pages.module';
import { WalMaterialModule } from './wal-material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(walRoutes),
        WalMaterialModule,
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
