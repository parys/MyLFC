import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { clubRoutes } from "./club.routes";
import { ClubEditComponent } from "./club-edit";
import { ClubListComponent } from "./club-list";
import { ClubCoreModule } from "../core";
import { StadiumCoreModule } from "@app/stadium";

@NgModule({
    imports: [
        SharedModule,
        ClubCoreModule,
        RouterModule.forChild(clubRoutes),
        StadiumCoreModule
    ],
    declarations: [
        ClubEditComponent,
        ClubListComponent
    ]
})
export class ClubModule { }