import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StadiumService } from "./stadium.service";
import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        StadiumService
    ]
})
export class StadiumCoreModule { }