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
import { MdButtonModule, MdInputModule, MdSelectModule, MdCardModule, MdNativeDateModule, MdDatepickerModule } from "@angular/material";
import { NgxPaginationModule } from "ngx-pagination";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdDatepickerModule,
        MdInputModule,
        MdNativeDateModule,
        MdSelectModule,
        NgxPaginationModule,
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