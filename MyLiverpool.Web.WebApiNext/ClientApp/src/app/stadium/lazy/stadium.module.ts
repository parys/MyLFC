import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StadiumListComponent } from "./stadium-list";
import { StadiumEditComponent } from "./stadium-edit";
import { stadiumRoutes } from "./stadium.routes";
import { SharedModule } from "@app/shared";
import { StadiumCoreModule } from "../core";

@NgModule({
    imports: [
        RouterModule.forChild(stadiumRoutes),
        SharedModule,
        StadiumCoreModule
    ],
    declarations: [
        StadiumEditComponent,
        StadiumListComponent
    ]
})
export class StadiumModule { }