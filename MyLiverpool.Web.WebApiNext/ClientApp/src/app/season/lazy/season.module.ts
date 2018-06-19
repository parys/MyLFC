import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { seasonRoutes } from "./season.routes";
import { SeasonCoreModule } from "../season-core.module";
import { SeasonCalendarComponent } from "./season-calendar";
import { SeasonEditComponent } from "./season-edit";
import { SeasonListComponent } from "./season-list";
import { SeasonStatisticsComponent } from "./season-statistics";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(seasonRoutes),
        SeasonCoreModule
    ],
    declarations: [
        SeasonCalendarComponent,
        SeasonEditComponent,
        SeasonListComponent,
        SeasonStatisticsComponent
    ]
})
export class SeasonModule { }