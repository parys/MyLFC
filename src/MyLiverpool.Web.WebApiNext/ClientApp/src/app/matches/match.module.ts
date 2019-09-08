import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatchEventsModule } from '@match-events/match-events.module';
import { MatchPersonModule } from '@match-persons/index';
import { CommentSharedModule } from '@comments/shared';
import { SharedModule } from '@shared/index';
import { StadiumCoreModule } from '@stadiums/core';
import { SeasonCoreModule } from '@seasons/index';
import { BreadcrumbService } from '@shared/breadcrumb';
import { MATCHES_RU, MATCH_RU } from '@constants/ru.constants';
import { MATCHES_ROUTE } from '@constants/routes.constants';
import { PipesModule } from '@base/pipes';

import { MatchService } from '@matches/match.service';
import { MatchEditComponent } from '@matches/pages/match-edit';
import { MatchListComponent } from '@matches/pages/match-list';
import { MatchDetailComponent } from '@matches/pages/match-detail';
import { matchRoutes } from '@matches/match.routes';
import { MatchMaterialModule } from '@matches/match-material.module';
import { SelectClubFormFieldModule } from '@widgets/http/select-club-form-field';

@NgModule({
    imports: [
        CommentSharedModule,
        SharedModule,
        MatchEventsModule,
        RouterModule.forChild(matchRoutes),
        MatchPersonModule,
        SeasonCoreModule,
        StadiumCoreModule,
        PipesModule,
        MatchMaterialModule,
        SelectClubFormFieldModule
    ],
    declarations: [
        MatchEditComponent,
        MatchListComponent,
        MatchDetailComponent
    ],
    providers: [
        MatchService
    ]
})
export class MatchModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${MATCHES_ROUTE}`, MATCHES_RU);
        this.breadcrumbService.addFriendlyNameForRouteRegex(`^/${MATCHES_ROUTE}/[0-9]+$`, MATCH_RU);
    }
}
