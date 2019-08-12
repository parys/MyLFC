import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SharedModule, BreadcrumbService } from '@app/shared';
import { FAQ_CATEGORIES_ROUTE, FAQ_CATEGORIES_RU } from '@app/+constants';

import { faqCategoryRoutes } from './faq-category.routes';
import { FaqCategoryEditComponent } from './faq-category-edit';
import { FaqCategoryListComponent } from './faq-category-list';
import { FaqCategoryService } from './faq-category.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(faqCategoryRoutes),
        MatInputModule,
        MatSlideToggleModule,
    ],
    declarations: [
        FaqCategoryEditComponent,
        FaqCategoryListComponent
    ],
    providers: [
        FaqCategoryService
    ]
})
export class FaqCategoryModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${FAQ_CATEGORIES_ROUTE}`, FAQ_CATEGORIES_RU);
        this.breadcrumbService.hideRouteRegex(`^/${FAQ_CATEGORIES_ROUTE}/[0-9]+$`);
    }
}
