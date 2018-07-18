import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { pollRoutes } from "./poll.routes";
import { PollCoreModule } from "../core";
import { PollListComponent } from "./poll-list";
import { PollDetailComponent } from "./poll-detail";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(pollRoutes),
        PollCoreModule
    ],
    declarations: [
        PollListComponent,
        PollDetailComponent
    ]
})
export class PollModule { }