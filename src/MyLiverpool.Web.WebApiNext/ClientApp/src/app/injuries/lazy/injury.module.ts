import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { InjuryEditComponent } from '@injuries/lazy/injury-edit';
import { InjuryListComponent } from '@injuries/lazy/injury-list';
import { injuryRoutes } from '@injuries/lazy/injury.routes';

import { BreadcrumbService } from '@base/breadcrumbs';
import { PaginationModule } from '@base/pagination/pagination.module';
import { INJURIES_ROUTE } from '@constants/routes.constants';
import { INJURIES_RU } from '@constants/ru.constants';
import { SelectPersonFormFieldModule } from '@widgets/http/select-person-form-field';

import { InjuryService } from '@injuries/injury.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(injuryRoutes),
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatButtonModule,
        SelectPersonFormFieldModule,
        PaginationModule
    ],
    declarations: [
        InjuryEditComponent,
        InjuryListComponent
    ],
    providers: [
        InjuryService
    ]
})
export class InjuryModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${INJURIES_ROUTE}`, INJURIES_RU);
        this.breadcrumbService.hideRouteRegex(`^/${INJURIES_ROUTE}/[0-9]+$`);
    }
}
