import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonListComponent } from "./person-list.component";
import { PersonService } from "./person.service";
import { PlayerStatisticsComponent } from "./player-statistics.component";
import { personRoutes } from "./person.routes";
import { SharedModule } from "../shared/index";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(personRoutes),
        SharedModule
    ],
    declarations: [
        PersonListComponent,
        PlayerStatisticsComponent
    ],
    exports: [
     //   EditorComponent
    ],
    providers: [
        PersonService
    ]
})
export class PersonModule { }