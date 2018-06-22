import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { pmRoutes } from "./pm.routes";
import { PmListComponent } from "./pm-list";
import { PmDetailComponent } from "./pm-detail";
import { PmEditComponent } from "./pm-edit";
import { PmReplyComponent } from "./pm-reply";
import { PmCounterComponent } from "./pm-counter";
import { PmService } from "./pm.service";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(pmRoutes)
    ],
    declarations: [
        PmCounterComponent,
        PmReplyComponent,
        PmEditComponent,
        PmDetailComponent,
        PmListComponent
    ],
    exports: [
        PmCounterComponent,
        PmReplyComponent
    ],
    providers: [
        PmService
    ]
})
export class PmModule { }