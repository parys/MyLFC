import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonListComponent } from "./person-list.component";
import { PersonEditComponent } from "./person-edit.component";
import { PersonBirthdayComponent } from "./person-birthday.component";
import { PersonService } from "./person.service";
import { BestPlayerComponent } from "./best-player.component";
import { StuffListComponent } from "./stuff-list.component";
import { SquadComponent } from "./squad.component";
import { personRoutes } from "./person.routes";
import { SharedModule } from "../shared/index";
import {
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdCardModule,
    MdSlideToggleModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdTabsModule
} from "@angular/material";
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
        MdSlideToggleModule,
        MdTabsModule,
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