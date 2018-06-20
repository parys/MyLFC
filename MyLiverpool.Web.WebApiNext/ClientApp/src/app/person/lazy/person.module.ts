import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonListComponent } from "./person-list";
import { StuffListComponent } from "./stuff-list";
import { SquadComponent } from "./squad";
import { personRoutes } from "./person.routes";
import { SharedModule } from "@app/shared";
import { PersonCoreModule } from "../core";


@NgModule({
    imports: [
        RouterModule.forChild(personRoutes),
        SharedModule,
        PersonCoreModule
    ],
    declarations: [
        PersonListComponent,
        SquadComponent,
        StuffListComponent
    ]
})
export class PersonModule { }