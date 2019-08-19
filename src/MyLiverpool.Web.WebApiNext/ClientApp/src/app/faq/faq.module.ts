import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, BreadcrumbService } from '@app/shared';
import { FAQ_ROUTE, FAQ_RU } from '@app/+constants';
import { faqItemRoutes } from './faq.routes';
import { FaqComponent } from './faq';
import { FaqService } from './faq.service';
import { FaqCategoryService } from '@app/faq-categories/lazy/faq-category.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(faqItemRoutes)
    ],
    declarations: [
        FaqComponent,
    ],
    providers: [
        FaqService,
        FaqCategoryService
    ]
})
export class FaqModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${FAQ_ROUTE}`, FAQ_RU);
    }
}
