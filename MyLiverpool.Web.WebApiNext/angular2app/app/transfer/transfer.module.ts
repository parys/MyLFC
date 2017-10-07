import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransferEditComponent } from "./transfer-edit/index";
import { TransferListComponent } from "./transfer-list.component";
import { TransferCurrentListComponent } from "./transfer-current-list.component";
import { TransferService } from "./transfer.service";
import { transferRoutes } from "./transfer.routes";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "@app/shared";
import { PersonModule } from "@app/person";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(transferRoutes),
        ReactiveFormsModule,
        NgxPaginationModule,
        SharedModule,
        PersonModule,
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