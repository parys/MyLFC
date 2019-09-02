import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/index';

import { TransferService } from '@transfers/core/transfer.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    providers: [
        TransferService
    ]
})
export class TransferCoreModule { }
