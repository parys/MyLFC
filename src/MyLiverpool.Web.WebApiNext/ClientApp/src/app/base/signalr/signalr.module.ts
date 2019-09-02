import { NgModule } from '@angular/core';

import { SignalRService } from '@base/signalr/signalr.common.service';
import { StorageModule } from '@base/storage';

@NgModule({
    imports: [
        StorageModule
    ],
    providers: [
        SignalRService
    ]
})
export class SignalRModule { }
