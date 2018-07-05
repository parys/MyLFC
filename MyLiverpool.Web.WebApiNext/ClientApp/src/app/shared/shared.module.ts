﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeleteDialogComponent } from "./delete-dialog";
import {
    MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatSelectModule, MatSlideToggleModule,
    MatSnackBarModule, MatTabsModule, MatTableModule, MatTooltipModule, MatSortModule, MatPaginatorModule, MatPaginatorIntl, MAT_SNACK_BAR_DEFAULT_OPTIONS,
    ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatSidenavModule
} from "@angular/material";
import { LoaderComponent, LoaderService } from "./loader";
import { BearerInterceptor } from "./interceptors";
import { CustomDatePipe } from "./pipes";
import { BreadcrumbComponent, BreadcrumbService } from "./breadcrumb";
import { NgxPaginationModule } from "ngx-pagination";
//import { DeferLoadDirective } from "./lazy";
import { AdComponent } from "./ad";

import { getRussianPaginatorIntl } from './intl/russian-paginator-intl';
import { SignalRModule } from "@app/+signalr";
import { StorageModule, StorageService } from "@app/+storage";
import { AuthModule } from "@app/+auth";
//import { DeferLoadDirective } from "./lazy/defer-load.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        SignalRModule,
        StorageModule,
        AuthModule, //todo temporary?
      //  McBreadcrumbsModule.forRoot(),

        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatSortModule,
        MatTabsModule,
        MatTableModule,
        MatTooltipModule,
        MatSidenavModule

    ],
    declarations: [
        DeleteDialogComponent,
        LoaderComponent,
        CustomDatePipe,
        BreadcrumbComponent,
     //   DeferLoadDirective,
        AdComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,

        DeleteDialogComponent,
        LoaderComponent, 
        CustomDatePipe,
        BreadcrumbComponent,
        AdComponent,

        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTabsModule,
        MatTableModule,
        MatTooltipModule,
        MatSidenavModule
    ],
    providers: [
        LoaderService,
        BreadcrumbService,
        { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true, deps: [StorageService, LoaderService] },
        { provide: MatPaginatorIntl, useValue: getRussianPaginatorIntl() },
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    ],
    entryComponents: [
        DeleteDialogComponent
    ]
})
export class SharedModule { }  