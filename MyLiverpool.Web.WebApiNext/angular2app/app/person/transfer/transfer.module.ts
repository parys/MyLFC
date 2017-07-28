import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MdButtonModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransferEditComponent } from "./transfer-edit.component";
import { TransferListComponent } from "./transfer-list.component";
import { TransferCurrentListComponent } from "./transfer-current-list.component";
import { TransferService } from "./transfer.service";
import { transferRoutes } from "./transfer.routes";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../../shared/index";
import * as angMaterial from '@angular/material';
import { Ng2AutoCompleteModule } from "ng2-auto-complete";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        RouterModule.forRoot(transferRoutes),
        ReactiveFormsModule,
        Ng2AutoCompleteModule,
        NgxPaginationModule,
        SharedModule,
        angMaterial.MdButtonModule,
        angMaterial.MdInputModule,
        angMaterial.MdDatepickerModule,
        angMaterial.MdSlideToggleModule
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
export class TransferModule { }