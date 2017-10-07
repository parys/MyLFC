import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared";
import { pmRoutes } from "./pm.routes";
import { PmListComponent } from "./pm-list/index";
import { PmDetailComponent } from "./pm-detail/index";
import { PmEditComponent } from "./pm-edit/index";
import { PmReplyComponent } from "./pm-reply/index";
import { PmCounterComponent } from "./pm-counter/index";
import { PmService } from "./pm.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(pmRoutes),
        SharedModule
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