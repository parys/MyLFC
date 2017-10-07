import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonListComponent } from "./person-list/index";
import { PersonEditComponent } from "./person-edit/index";
import { PersonBirthdayComponent } from "./person-birthday/index";
import { PersonService } from "./person.service";
import { BestPlayerComponent } from "./best-player/index";
import { StuffListComponent } from "./stuff-list/index";
import { SquadComponent } from "./squad/index";
import { personRoutes } from "./person.routes";
import { SharedModule } from "../shared/index";
import { NgxPaginationModule } from "ngx-pagination";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        ReactiveFormsModule,
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
        PersonBirthdayComponent
    ],
    providers: [
        PersonService
    ]
})
export class PersonModule { }