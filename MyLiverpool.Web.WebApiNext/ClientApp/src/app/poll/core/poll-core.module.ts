import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { PollService } from "./poll.service";
import { pollCoreRoutes } from "./poll.routes";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(pollCoreRoutes)
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        PollService
    ]
})
export class PollCoreModule { }