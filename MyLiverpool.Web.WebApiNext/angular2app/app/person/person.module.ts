import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonListComponent } from "./person-list";
import { PersonEditComponent } from "./person-edit";
import { PersonBirthdayComponent } from "./person-birthday";
import { PersonService } from "./person.service";
import { BestPlayerComponent } from "./best-player";
import { StuffListComponent } from "./stuff-list";
import { SquadComponent } from "./squad";
import { personRoutes } from "./person.routes";
import { SharedModule } from "../shared";


@NgModule({
    imports: [
        RouterModule.forRoot(personRoutes),
        SharedModule
    ],
    declarations: [
        BestPlayerComponent,
        PersonBirthdayComponent,
        PersonEditComponent,
        PersonListComponent,
        SquadComponent,
        StuffListComponent
    ],
    exports: [
        BestPlayerComponent,
        PersonBirthdayComponent,
        PersonEditComponent
    ],
    providers: [
        PersonService
    ]
})
export class PersonModule { }