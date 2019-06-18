import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { clubRoutes } from "./club.routes";
import { ClubEditComponent } from "./club-edit";
import { ClubListComponent } from "./club-list";
import { ClubCoreModule } from "../core";
import { StadiumCoreModule } from "@app/stadium";
import { BreadcrumbService } from "@app/shared/breadcrumb";
import { CLUBS_ROUTE, CLUBS_RU } from "@app/+constants";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";

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