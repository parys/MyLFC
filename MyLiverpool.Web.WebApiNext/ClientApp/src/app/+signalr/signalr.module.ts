import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SignalRService } from "./signalr.common.service";
import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
       // CommonModule,
       // RouterModule.forRoot(notificationRoutes),
        SharedModule
    ],
    declarations: [

    ],
    exports: [

    ],
    providers: [
        SignalRService
    ]
})
export class SignalRModule { }