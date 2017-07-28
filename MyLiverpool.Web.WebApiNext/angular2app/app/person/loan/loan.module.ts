import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MdButtonModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoanEditComponent } from "./loan-edit.component";
import { LoanListComponent } from "./loan-list.component";
import { LoanService } from "./loan.service";
import { loanRoutes } from "./loan.routes";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../../shared/index";
import * as angMaterial from '@angular/material';
import { Ng2AutoCompleteModule } from "ng2-auto-complete";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        RouterModule.forRoot(loanRoutes),
        ReactiveFormsModule,
        Ng2AutoCompleteModule,
        NgxPaginationModule,
        SharedModule,
        angMaterial.MdButtonModule,
        angMaterial.MdInputModule,
        angMaterial.MdDatepickerModule
    ],
    declarations: [
        LoanEditComponent,
        LoanListComponent,
    ],
    providers: [
        LoanService
    ]
})
export class LoanModule { }