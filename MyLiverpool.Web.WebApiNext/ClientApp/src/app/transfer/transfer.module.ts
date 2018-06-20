import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TransferEditComponent } from "./transfer-edit";
import { TransferListComponent } from "./transfer-list.component";
import { TransferCurrentListComponent } from "./transfer-current-list.component";
import { TransferService } from "./transfer.service";
import { transferRoutes } from "./transfer.routes";
import { SharedModule } from "@app/shared";
import { PersonCoreModule } from "@app/person";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(transferRoutes),
        PersonCoreModule,
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