import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InjuryEditComponent } from "./injury-edit";
import { InjuryListComponent } from "./injury-list";
import { injuryRoutes } from "./injury.routes";
import { SharedModule } from "@app/shared";
import { InjuryCoreModule } from "../core";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(injuryRoutes),
        InjuryCoreModule
    ],
    declarations: [
        InjuryEditComponent,
        InjuryListComponent
    ]
})
export class InjuryModule { }