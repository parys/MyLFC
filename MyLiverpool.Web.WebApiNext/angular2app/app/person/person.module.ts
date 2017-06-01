import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonListComponent } from "./person-list.component";
import { PersonEditComponent } from "./person-edit.component";
import { PersonService } from "./person.service";
import { PlayerStatisticsComponent } from "./player-statistics.component";
import { BestPlayerComponent } from "./best-player.component";
import { StuffListComponent } from "./stuff-list.component";
import { personRoutes } from "./person.routes";
import { SharedModule } from "../shared/index";
import { MdButtonModule, MdInputModule, MdSelectModule, MdCardModule } from "@angular/material";
import { DatepickerModule } from "ng2-bootstrap/datepicker";
import { PaginationModule } from "ng2-bootstrap/pagination";


@NgModule({
    imports: [
        CommonModule,
        DatepickerModule.forRoot(),
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        PaginationModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forRoot(personRoutes),
        SharedModule
    ],
    declarations: [
        BestPlayerComponent,
        PersonEditComponent,
        PersonListComponent,
        PlayerStatisticsComponent,
        StuffListComponent
    ],
    exports: [
        BestPlayerComponent
    ],
    providers: [
        PersonService
    ]
})
export class PersonModule { }