import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PipesModule } from '@base/pipes';
import { BreadcrumbService } from '@base/breadcrumbs';

import { staticPagesRoutes } from './static-pages.routes';
import { StaticPageComponent } from '@static-pages/pages/static-page';
import { StaticPagesService } from '@static-pages/static-pages.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(staticPagesRoutes),
        PipesModule
    ],
    declarations: [
        StaticPageComponent
    ],
    exports: [
        StaticPageComponent
    ],
    providers: [
        StaticPagesService
    ]
})
export class StaticPagesModule {
    constructor(
        breadcrumbService: BreadcrumbService
    ) {
        breadcrumbService.addFriendlyNameForRoute('/about', 'О нас');
        breadcrumbService.addFriendlyNameForRoute('/aboutClub', 'О клубе');
        breadcrumbService.addFriendlyNameForRoute('/chat', 'Чат');
        breadcrumbService.addFriendlyNameForRoute('/clubHistory', 'История клуба');
        breadcrumbService.addFriendlyNameForRoute('/cooperation', 'Сотрудничество');
        breadcrumbService.addFriendlyNameForRoute('/copyright', 'О перепечатке информации');
        breadcrumbService.addFriendlyNameForRoute('/fantasy', 'Fantasy Лига MyLFC');
        breadcrumbService.addFriendlyNameForRoute('/instructions', 'Инструкции');
        breadcrumbService.addFriendlyNameForRoute('/job', 'Работа на сайте');
        breadcrumbService.addFriendlyNameForRoute('/plans', 'Планы');
        breadcrumbService.addFriendlyNameForRoute('/rules', 'Правила');

    }
}
