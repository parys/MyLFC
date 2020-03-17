import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ContractEditPageComponent, ContractsListPageComponent, CurrentContractsListPageComponent } from '@contracts/pages';

import { BreadcrumbService } from '@base/breadcrumbs';
import { PaginationModule } from '@base/pagination/pagination.module';
import { SelectPersonFormFieldModule } from '@widgets/http/select-person-form-field';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsService } from './contracts.service';
import { NgxsModule } from '@ngxs/store';
import { ContractsState } from './store';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ContractsRoutingModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatInputModule,
        MatButtonModule,
        SelectPersonFormFieldModule,
        PaginationModule,
        NgxsModule.forFeature([ContractsState]),
        SelectPersonFormFieldModule
    ],
    declarations: [
        ContractEditPageComponent,
        ContractsListPageComponent,
        CurrentContractsListPageComponent
    ],
    providers: [
        ContractsService
    ]
})
export class ContractsModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/contracts`, 'Контракты');
        this.breadcrumbService.hideRouteRegex(`^/contracts/[0-9]+$`);
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/current`, 'Текущие');
    }
}
