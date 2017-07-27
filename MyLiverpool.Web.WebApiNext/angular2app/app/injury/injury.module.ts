import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MdButtonModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InjuryEditComponent } from "./injury-edit.component";
import { InjuryListComponent } from "./injury-list.component";
import { InjuryCurrentListComponent } from "./injury-current-list.component";
import { InjuryService } from "./injury.service";
import { injuryRoutes } from "./injury.routes";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/index";
import * as angMaterial from '@angular/material';
import { Ng2AutoCompleteModule } from "ng2-auto-complete";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        RouterModule.forRoot(injuryRoutes),
        ReactiveFormsModule,
        Ng2AutoCompleteModule,
        NgxPaginationModule,
        SharedModule,
        angMaterial.MdButtonModule,
        angMaterial.MdInputModule,
        angMaterial.MdDatepickerModule
    ],
    declarations: [
        InjuryEditComponent,
        InjuryListComponent,
        InjuryCurrentListComponent
    ],
    exports: [
        InjuryCurrentListComponent
    ],
    providers: [
        InjuryService
    ]
})
export class InjuryModule { }