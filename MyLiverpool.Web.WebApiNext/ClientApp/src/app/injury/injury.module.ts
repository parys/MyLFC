import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InjuryEditComponent } from "./injury-edit";
import { InjuryListComponent } from "./injury-list";
import { InjuryCurrentListComponent } from "./injury-current-list";
import { InjuryService } from "./injury.service";
import { injuryRoutes } from "./injury.routes";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(injuryRoutes),
        ReactiveFormsModule,
        NgxPaginationModule,
        SharedModule,
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