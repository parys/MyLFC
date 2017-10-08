import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { pmRoutes } from "./pm.routes";
import { PmListComponent } from "./pm-list/index";
import { PmDetailComponent } from "./pm-detail/index";
import { PmEditComponent } from "./pm-edit/index";
import { PmReplyComponent } from "./pm-reply/index";
import { PmCounterComponent } from "./pm-counter/index";
import { PmService } from "./pm.service";
import { UserModule } from "@app/user";

@NgModule({
    imports: [
        RouterModule.forRoot(pmRoutes),
        SharedModule,
        UserModule,
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