import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlayerStatisticsComponent } from "./player-statistics.component";
import { playerRoutes } from "./player.routes";
import { SharedModule } from "../shared/index";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(playerRoutes),
        SharedModule
    ],
    declarations: [
        PlayerStatisticsComponent
    ],
    exports: [
     //   EditorComponent
    ],
    providers: [
    ]
})
export class PlayerModule { }