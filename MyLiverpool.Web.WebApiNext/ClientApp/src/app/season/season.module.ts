import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { routing } from "./season.routes";
import { SeasonService } from "./season.service";
import { SeasonCalendarComponent } from "./season-calendar";
import { SeasonEditComponent } from "./season-edit";
import { SeasonListComponent } from "./season-list";
import { SeasonStatisticsComponent } from "./season-statistics";

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        SeasonCalendarComponent,
        SeasonEditComponent,
        SeasonListComponent,
        SeasonStatisticsComponent
    ],
    providers: [
        SeasonService
    ]
})
export class SeasonModule { }