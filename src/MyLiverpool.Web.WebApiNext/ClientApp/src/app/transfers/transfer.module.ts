import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TRANSFERS_RU } from '@constants/ru.constants';
import { SelectPersonFormFieldModule } from '@widgets/http/select-person-form-field';
import { SelectClubFormFieldModule } from '@widgets/http/select-club-form-field';
import { SelectSeasonFormFieldModule } from '@widgets/http/select-season-form-field';
import { BreadcrumbService } from '@base/breadcrumbs';
import { PaginationModule } from '@base/pagination/pagination.module';
import { TRANSFERS_ROUTE } from '@constants/routes.constants';

import { TransferCurrentListComponent } from '@transfers/pages/transfer-current-list';
import { transferRoutes } from '@transfers/transfer.routes';
import { TransferEditComponent } from '@transfers/pages/transfer-edit';
import { TransferListComponent } from '@transfers/pages/transfer-list';
import { TransferService } from '@transfers/transfer.service';
import { TransfersMaterialModule } from './transfers-material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(transferRoutes),
        SelectPersonFormFieldModule,
        SelectClubFormFieldModule,
        SelectSeasonFormFieldModule,
        TransfersMaterialModule,
        PaginationModule
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
