import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, BreadcrumbService } from '@app/shared';
import { FAQ_ROUTE, FAQ_RU } from '@app/+constants';
import { faqItemRoutes } from './faq.routes';
import { FaqComponent } from './faq';
import { FaqService } from './faq.service';
import { FaqCategoryService } from '@faq-categories/lazy/faq-category.service';
import { PipesModule } from '@base/pipes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(faqItemRoutes),
        PipesModule
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
