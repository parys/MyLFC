import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { PmReplyComponent } from "./pm-reply";
import { PmCounterComponent } from "./pm-counter";
import { PmService } from "./pm.service";

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        PmCounterComponent,
        PmReplyComponent
    ],
    exports: [
        PmCounterComponent,
        PmReplyComponent
    ],
    providers: [
        PmService
    ]
})
export class PmCoreModule { }