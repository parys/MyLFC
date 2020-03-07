import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { CommentSharedModule } from '@comments/shared';
import { BreadcrumbService } from '@base/breadcrumbs';
import { NEWS_ROUTE, BLOGS_ROUTE, NEWSS_RU, NEWS_RU, BLOGS_RU, BLOG_RU } from '@constants/index';
import { PipesModule } from '@base/pipes';

import { MaterialListComponent } from '@materials/lazy/pages/material-list';
import { materialRoutes } from '@materials/lazy/material.routes';
import { MaterialCoreModule } from '@materials/core/material-core.module';
import { MaterialDetailComponent } from '@materials/lazy/pages/material-detail';
import { MaterialResolver } from './resolvers';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(materialRoutes),
        CommentSharedModule,
        MaterialCoreModule,
        NgxPaginationModule,
        PipesModule,
    ],
    declarations: [
        MaterialDetailComponent,
        MaterialListComponent
    ],
    providers: [
        MaterialResolver
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
