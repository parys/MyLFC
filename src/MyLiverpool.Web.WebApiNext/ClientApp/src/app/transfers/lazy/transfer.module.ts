import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TransferEditComponent } from './transfer-edit';
import { TransferListComponent } from './transfer-list';
import { SharedModule } from '@app/shared';
import { PersonService } from '@persons/person.service'; // todo
import { TransferCoreModule } from '../core';
import { ClubCoreModule } from '@clubs/core';
import { SeasonCoreModule } from '@seasons/core';
import { BreadcrumbService } from '@app/shared/breadcrumb';
import { TRANSFERS_ROUTE, TRANSFERS_RU } from '@app/+constants';
import { TransferCurrentListComponent } from './transfer-current-list';
import { transferRoutes } from './transfer.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(transferRoutes),
        ClubCoreModule,
        SeasonCoreModule,
        TransferCoreModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatSortModule,
        MatInputModule
    ],
    declarations: [
        TransferEditComponent,
        TransferListComponent,
        TransferCurrentListComponent
    ],
    providers: [
        PersonService
    ]
})
export class TransferModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${TRANSFERS_ROUTE}`, TRANSFERS_RU);
        this.breadcrumbService.addFriendlyNameForRoute(`/${TRANSFERS_ROUTE}/current`, 'Текущие');
        this.breadcrumbService.hideRouteRegex(`^/${TRANSFERS_ROUTE}/[0-9]+$`);
    }
}
