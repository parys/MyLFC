import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "@app/shared";
import { clubRoutes } from "./club.routes";
import { ClubEditComponent } from "./club-edit/index";
import { ClubListComponent } from "./club-list/index";
import { ClubService } from "./club.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(clubRoutes),
        ReactiveFormsModule,
        NgxPaginationModule,
        SharedModule
    ],
    declarations: [
        ClubEditComponent,
        ClubListComponent
    ],
    providers: [
        ClubService
    ]
})
export class ClubModule { }