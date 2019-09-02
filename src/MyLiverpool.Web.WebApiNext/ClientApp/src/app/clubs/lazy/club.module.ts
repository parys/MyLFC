import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '@shared/index';
import { StadiumCoreModule } from '@stadiums/core';
import { BreadcrumbService } from '@shared/breadcrumb';
import { CLUBS_ROUTE } from '@constants/routes.constants';
import { CLUBS_RU } from '@constants/ru.constants';

import { clubRoutes } from '@clubs/lazy/club.routes';
import { ClubEditComponent } from '@clubs/lazy/club-edit';
import { ClubListComponent } from '@clubs/lazy/club-list';
import { ClubCoreModule } from '@clubs/core';

@NgModule({
    imports: [
        SharedModule,
        ClubCoreModule,
        RouterModule.forChild(clubRoutes),
        StadiumCoreModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSortModule,
        MatInputModule
    ],
    declarations: [
        ClubEditComponent,
        ClubListComponent
    ]
})
export class ClubModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${CLUBS_ROUTE}`, CLUBS_RU);
        this.breadcrumbService.hideRouteRegex(`^/${CLUBS_ROUTE}/[0-9]+$`);
    }
}
