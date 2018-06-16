import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecaptchaComponent } from "./recaptcha.component";
import { HttpWrapper } from "./httpWrapper";
import { StorageService } from "./storage.service";
import { LocalStorage } from "./local-storage";
import { RolesCheckedService } from "./roles-checked.service";
import { GlobalValidators } from "./globalValidators";
import { ReCaptchaModule } from "angular2-recaptcha";
import { DeleteDialogComponent } from "./delete-dialog";
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatSelectModule, MatSlideToggleModule,
    MatSnackBarModule, MatTabsModule, MatTableModule, MatSortModule, MatPaginatorModule, MatPaginatorIntl
} from "@angular/material";
import { LoaderComponent, LoaderService } from "./loader";
import { BearerInterceptor } from "./interceptors";
import { RoleGuard, UnSignedGuard, AuthService } from "./auth";
import { CustomDatePipe } from "./pipes";
import { BreadcrumbComponent, BreadcrumbService } from "./breadcrumb";
import { NgxPaginationModule } from "ngx-pagination";
import { DeferLoadDirective } from "./lazy";
import { AdComponent } from "./ad";


import { getRussianPaginatorIntl } from './intl/russian-paginator-intl';
import { SignalRService } from "./signalr.common.service";

export function getStorage() {
    const result = typeof window !== "undefined" ? window.localStorage : null;
    return result;
}

@NgModule({
    imports: [
        CommonModule,
        ReCaptchaModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
      //  McBreadcrumbsModule.forRoot(),

        MatAutocompleteModule,
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
        MatTableModule

    ],
    declarations: [
        DeleteDialogComponent,
        RecaptchaComponent,
        LoaderComponent,
        CustomDatePipe,
        BreadcrumbComponent,
        DeferLoadDirective,
        AdComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,

        DeleteDialogComponent,
        RecaptchaComponent,
        LoaderComponent, 
        CustomDatePipe,
        BreadcrumbComponent,
        AdComponent,

        MatAutocompleteModule,
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
        DeferLoadDirective
    ],
    providers: [
        AuthService,
        RoleGuard,
        UnSignedGuard,
        GlobalValidators,
        HttpWrapper,
        StorageService,
        RolesCheckedService,
        LoaderService,
        BreadcrumbService,
        SignalRService,
        { provide: LocalStorage, useFactory: getStorage },
        { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true, deps: [StorageService, LoaderService] },
        { provide: MatPaginatorIntl, useValue: getRussianPaginatorIntl() }
    ],
    entryComponents: [
        DeleteDialogComponent
    ]
})
export class SharedModule { }  