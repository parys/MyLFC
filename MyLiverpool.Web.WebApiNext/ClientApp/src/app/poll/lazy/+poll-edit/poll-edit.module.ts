import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { pollEditRoutes } from "./poll-edit.routes";
import { PollCoreModule } from "../../core/poll-core.module";
import { PollEditComponent } from "./poll-edit.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(pollEditRoutes),
        PollCoreModule,
      //  ImageCoreModule
    ],
    declarations: [
        PollEditComponent
    ],
    providers: [
    ]
})
export class PollEditModule { }