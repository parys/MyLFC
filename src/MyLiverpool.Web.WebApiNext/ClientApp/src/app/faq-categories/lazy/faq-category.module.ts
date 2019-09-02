import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SharedModule, BreadcrumbService } from '@shared/index';
import { FAQ_CATEGORIES_ROUTE, FAQ_CATEGORIES_RU } from '@constants/index';

import { faqCategoryRoutes } from '@faq-categories/lazy/faq-category.routes';
import { FaqCategoryEditComponent } from '@faq-categories/lazy/faq-category-edit';
import { FaqCategoryListComponent } from '@faq-categories/lazy/faq-category-list';
import { FaqCategoryService } from '@faq-categories/lazy/faq-category.service';

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
