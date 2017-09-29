import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdButtonModule, MdCheckboxModule, MdTabsModule, MdAutocompleteModule, MdIconModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/index";
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
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdInputModule,
        MdTabsModule,
        MdAutocompleteModule,
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