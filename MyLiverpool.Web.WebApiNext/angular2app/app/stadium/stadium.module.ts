import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StadiumListComponent } from "./stadium-list.component";
import { StadiumEditComponent } from "./stadium-edit.component";
import { StadiumService } from "./stadium.service";
import { stadiumRoutes } from "./stadium.routes";
import { SharedModule } from "@app/shared";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
    imports: [
        NgxPaginationModule,
        RouterModule.forRoot(stadiumRoutes),
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