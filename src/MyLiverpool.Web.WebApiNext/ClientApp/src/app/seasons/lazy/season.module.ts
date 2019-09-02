import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule } from '@shared/index';
import { seasonRoutes } from '@seasons/lazy/season.routes';
import { SeasonCoreModule } from '@seasons/core';
import { SeasonCalendarComponent } from '@seasons/lazy/season-calendar';
import { SeasonEditComponent } from '@seasons/lazy/season-edit';
import { SeasonListComponent } from '@seasons/lazy/season-list';
import { SeasonStatisticsComponent } from '@seasons/lazy/season-statistics';
import { SeasonStatisticsItemComponent } from '@seasons/lazy/season-statistics-item';
import { BreadcrumbService } from '@shared/breadcrumb';
import { CALENDAR_RU, SEASONS_ROUTE, STATISTICS_RU } from '@constants/index';

import { PipesModule } from '@base/pipes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(seasonRoutes),
        SeasonCoreModule,
        MatSelectModule,
        PipesModule
    ],
    declarations: [
        SeasonCalendarComponent,
        SeasonEditComponent,
        SeasonListComponent,
        SeasonStatisticsComponent,
        SeasonStatisticsItemComponent
    ]
})
export class SeasonModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${SEASONS_ROUTE}`, 'Сезоны');
        this.breadcrumbService.addFriendlyNameForRoute(`/${SEASONS_ROUTE}/calendar`, CALENDAR_RU);
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${SEASONS_ROUTE}/[0-9]+/calendar`, CALENDAR_RU);
        this.breadcrumbService.addFriendlyNameForRoute(`/${SEASONS_ROUTE}/statistics`, STATISTICS_RU);
        this.breadcrumbService.hideRouteRegex(`^/${SEASONS_ROUTE}/[0-9]+$`);
    }
}
