import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonListComponent } from "./person-list.component";
import { PersonEditComponent } from "./person-edit.component";
import { PersonService } from "./person.service";
import { PlayerStatisticsComponent } from "./player-statistics.component";
import { personRoutes } from "./person.routes";
import { SharedModule } from "../shared/index";
import { DatepickerModule } from "ng2-bootstrap/datepicker";


@NgModule({
    imports: [
        CommonModule,
        DatepickerModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(personRoutes),
        SharedModule
    ],
    declarations: [
        PersonEditComponent,
        PersonListComponent,
        PlayerStatisticsComponent
    ],
    exports: [
    ],
    providers: [
        PersonService
    ]
})
export class PersonModule { }