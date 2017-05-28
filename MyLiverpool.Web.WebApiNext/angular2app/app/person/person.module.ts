import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonListComponent } from "./person-list.component";
import { PersonEditComponent } from "./person-edit.component";
import { PersonService } from "./person.service";
import { PlayerStatisticsComponent } from "./player-statistics.component";
import { BestPlayerComponent } from "./best-player.component";
import { personRoutes } from "./person.routes";
import { SharedModule } from "../shared/index";
import { DatepickerModule } from "ng2-bootstrap/datepicker";
import { PaginationModule } from "ng2-bootstrap/pagination";


@NgModule({
    imports: [
        CommonModule,
        DatepickerModule.forRoot(),
        FormsModule,
        PaginationModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forRoot(personRoutes),
        SharedModule
    ],
    declarations: [
        BestPlayerComponent,
        PersonEditComponent,
        PersonListComponent,
        PlayerStatisticsComponent
    ],
    exports: [
        BestPlayerComponent
    ],
    providers: [
        PersonService
    ]
})
export class PersonModule { }