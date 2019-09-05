import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './delete-dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LoaderComponent, LoaderService } from './loader';
import { BearerInterceptor } from './interceptors';
import { BreadcrumbComponent } from './breadcrumb';
// import { DeferLoadDirective } from "./lazy";
import { AdComponent } from './ad';

import { getRussianPaginatorIntl } from './intl/russian-paginator-intl';
import { SignalRModule } from '@base/signalr';
import { StorageModule, StorageService } from '@base/storage';
import { AuthModule } from '@base/auth/auth.module';
import { PipesModule } from '@base/pipes';
// import { DeferLoadDirective } from "./lazy/defer-load.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SignalRModule,
        StorageModule,
        AuthModule, // todo temporary?
        PipesModule, // todo ?

        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatSidenavModule

    ],
    declarations: [
        DeleteDialogComponent,
        LoaderComponent,
        BreadcrumbComponent,
     //   DeferLoadDirective,
        AdComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        DeleteDialogComponent,
        LoaderComponent,
        BreadcrumbComponent,
        AdComponent,

        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatSidenavModule
    ],
    providers: [
        LoaderService,
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
