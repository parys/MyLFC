import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule, BreadcrumbService } from '@app/shared';
import { FAQ_CATEGORIES_ROUTE, FAQ_CATEGORIES_RU } from '@app/+constants';
import { EditorModule } from '@app/editor';

import { faqItemRoutes } from './faq-item.routes';
import { FaqItemEditComponent } from './faq-item-edit';
import { FaqItemListComponent } from './faq-item-list';
import { FaqItemService } from './faq-item.service';
import { FaqCategoryService } from '@app/faq-categories/lazy/faq-category.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(faqItemRoutes),
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        EditorModule
    ],
    declarations: [
        FaqItemEditComponent,
        FaqItemListComponent
    ],
    providers: [
        FaqCategoryService,
        FaqItemService
    ]
})
export class FaqItemModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${FAQ_CATEGORIES_ROUTE}`, FAQ_CATEGORIES_RU);
        this.breadcrumbService.hideRouteRegex(`^/${FAQ_CATEGORIES_ROUTE}/[0-9]+$`);
    }
}
