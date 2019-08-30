import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatchEditComponent } from './pages/match-edit';
import { MatchListComponent } from './pages/match-list';
import { MatchDetailComponent } from './pages/match-detail';
import { matchRoutes } from './match.routes';
import { MatchEventModule } from '@match-events/index';
import { MatchPersonModule } from '@match-persons/index';
import { CommentSharedModule } from '@comments/shared';
import { SharedModule } from '@app/shared';
import { ClubCoreModule } from '@clubs/core';
import { StadiumCoreModule } from '@stadiums/core';
import { SeasonCoreModule } from '@seasons/index';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { BreadcrumbService } from '@app/shared/breadcrumb';
import { MATCHES_ROUTE, MATCHES_RU, MATCH_RU  } from '@app/+constants';
import { MatchService } from './match.service';
import { PipesModule } from '@app/base/pipes';

@NgModule({
    imports: [
        CommentSharedModule,
        SharedModule,
        MatchEventModule,
        RouterModule.forChild(matchRoutes),
        MatchPersonModule,
        ClubCoreModule,
        SeasonCoreModule,
        StadiumCoreModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatInputModule,
        MatTabsModule,
        PipesModule
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
