import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MdButtonModule, MdAutocompleteModule, MdInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "../shared/index";
import { clubRoutes } from "./club.routes";
import { ClubEditComponent } from "./club-edit/index";
import { ClubListComponent } from "./club-list/index";
import { ClubService } from "./club.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdInputModule,
        RouterModule.forRoot(clubRoutes),
        ReactiveFormsModule,
        NgxPaginationModule,
        SharedModule
    ],
    declarations: [
        ClubEditComponent,
        ClubListComponent
    ],
    exports: [
    ],
    providers: [
        ClubService
    ]
})
export class ClubModule { }