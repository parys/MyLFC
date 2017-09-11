import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MdButtonModule, MdAutocompleteModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransferEditComponent } from "./transfer-edit/index";
import { TransferListComponent } from "./transfer-list.component";
import { TransferCurrentListComponent } from "./transfer-current-list.component";
import { TransferService } from "./transfer.service";
import { transferRoutes } from "./transfer.routes";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/index";
import * as angMaterial from '@angular/material';
import { PersonModule } from "../person/index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdAutocompleteModule,
        MdButtonModule,
        RouterModule.forRoot(transferRoutes),
        ReactiveFormsModule,
        NgxPaginationModule,
        SharedModule,
        PersonModule,
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