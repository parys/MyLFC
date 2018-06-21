import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TransferEditComponent } from "./transfer-edit";
import { TransferListComponent } from "./transfer-list";
import { transferRoutes } from "./transfer.routes";
import { SharedModule } from "@app/shared";
import { PersonCoreModule } from "@app/person";
import { TransferCoreModule } from "../core";
import { TransferCurrentListComponent } from "./transfer-current-list";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(transferRoutes),
        PersonCoreModule,
        TransferCoreModule
    ],
    declarations: [
        TransferEditComponent,
        TransferListComponent,
        TransferCurrentListComponent
    ]
})
export class TransferModule { }