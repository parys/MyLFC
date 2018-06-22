import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StadiumListComponent } from "./stadium-list.component";
import { StadiumEditComponent } from "./stadium-edit.component";
import { StadiumService } from "./stadium.service";
import { stadiumRoutes } from "./stadium.routes";
import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
        RouterModule.forChild(stadiumRoutes),
        SharedModule
    ],
    declarations: [
        StadiumEditComponent,
        StadiumListComponent,
    ],
    providers: [
        StadiumService
    ]
})
export class StadiumModule { }