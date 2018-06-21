import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatchCalendarComponent } from "./match-calendar";
import { MatchService } from "./match.service";
import { MatchHeaderComponent } from "./match-header";
import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        MatchCalendarComponent,
        MatchHeaderComponent,
    ],
    providers: [
        MatchService,
    ],
    exports: [
        MatchCalendarComponent,
        MatchHeaderComponent
    ]
})
export class MatchCoreModule { }  