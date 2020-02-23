import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatchEventsModule } from '@match-events/match-events.module';
import { MatchPersonModule } from '@match-persons/index';
import { CommentSharedModule } from '@comments/shared';
import { StadiumCoreModule } from '@stadiums/core';
import { BreadcrumbService } from '@base/breadcrumbs';
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
import { SelectSeasonFormFieldModule } from '@widgets/http/select-season-form-field';
import { PaginationModule } from '@base/pagination/pagination.module';
import { NgxsModule } from '@ngxs/store';
import { MatchesState } from './store';
import { MatchResolver } from './resolvers';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CommentSharedModule,
        MatchEventsModule,
        RouterModule.forChild(matchRoutes),
        MatchPersonModule,
        StadiumCoreModule,
        PipesModule,
        MatchMaterialModule,
        SelectClubFormFieldModule,
        SelectSeasonFormFieldModule,
        PaginationModule,
        NgxsModule.forFeature([MatchesState])
    ],
    declarations: [
        MatchEditComponent,
        MatchListComponent,
        MatchDetailComponent
    ],
    providers: [
        MatchService,
        MatchResolver
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
