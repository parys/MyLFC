import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TRANSFERS_RU } from '@constants/ru.constants';
import { SelectPersonFormFieldModule } from '@widgets/http/select-person-form-field';
import { SelectClubFormFieldModule } from '@widgets/http/select-club-form-field';
import { SharedModule } from '@shared/index';
import { SeasonCoreModule } from '@seasons/core';
import { BreadcrumbService } from '@shared/breadcrumb';
import { TRANSFERS_ROUTE } from '@constants/routes.constants';

import { TransferCurrentListComponent } from '@transfers/pages/transfer-current-list';
import { transferRoutes } from '@transfers/transfer.routes';
import { TransferEditComponent } from '@transfers/pages/transfer-edit';
import { TransferListComponent } from '@transfers/pages/transfer-list';
import { TransferService } from '@transfers/transfer.service';
import { TransfersMaterialModule } from './transfers-material.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(transferRoutes),
        SeasonCoreModule,
        SelectPersonFormFieldModule,
        SelectClubFormFieldModule,
        TransfersMaterialModule
    ],
    declarations: [
        TransferEditComponent,
        TransferListComponent,
        TransferCurrentListComponent
    ],
    providers: [
        TransferService
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
