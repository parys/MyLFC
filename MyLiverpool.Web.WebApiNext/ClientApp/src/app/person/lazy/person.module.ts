import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonListComponent } from "./person-list";
import { StuffListComponent } from "./stuff-list";
import { SquadComponent } from "./squad";
import { personRoutes } from "./person.routes";
import { SharedModule } from "@app/shared";
import { PersonCoreModule } from "../core";
import { MatTabsModule } from "@angular/material";


@NgModule({
    imports: [
        RouterModule.forChild(personRoutes),
        SharedModule,
        PersonCoreModule,
        MatTabsModule
    ],
    declarations: [
        PersonListComponent,
        SquadComponent,
        StuffListComponent
    ]
})
export class PersonModule { }