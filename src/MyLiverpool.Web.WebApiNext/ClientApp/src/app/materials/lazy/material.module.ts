import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '@app/shared';
import { materialRoutes } from './material.routes';
import { MaterialCoreModule } from '../core/material-core.module';
import { MaterialDetailComponent } from './material-detail';
import { CommentSharedModule } from '@comments/shared';
import { BreadcrumbService } from '@app/shared/breadcrumb';
import { NEWS_ROUTE, BLOGS_ROUTE, NEWSS_RU, NEWS_RU, BLOGS_RU, BLOG_RU } from '@app/+constants';
import { CanLoadEditMaterial } from './canLoadEdit.guard';
import { MaterialListComponent } from './material-list';
import { PipesModule } from '@base/pipes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(materialRoutes),
        CommentSharedModule,
        MaterialCoreModule,
        NgxPaginationModule,
        PipesModule
    ],
    declarations: [
        MaterialDetailComponent,
        MaterialListComponent
    ],
    providers: [
        CanLoadEditMaterial
    ]
})
export class MaterialModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${NEWS_ROUTE}`, NEWSS_RU);
        this.breadcrumbService.addFriendlyNameForRouteRegex(`^/${NEWS_ROUTE}/[0-9]+$`, NEWS_RU);
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${BLOGS_ROUTE}`, BLOGS_RU);
        this.breadcrumbService.addFriendlyNameForRouteRegex(`^/${BLOGS_ROUTE}/[0-9]+$`, BLOG_RU);
    }
}
