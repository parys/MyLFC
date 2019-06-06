import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { MaterialLatestComponent } from "./material-latest";
import { MaterialActivateDialogComponent } from "./material-activate-dialog";
import { MaterialService } from "./material.service";
import { MatchCoreModule } from "@app/match";
import { MaterialTopComponent } from './material-top';
import { MaterialHomeComponent } from './material-home/material-home.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        MatchCoreModule
    ],
    declarations: [
        MaterialLatestComponent,
        MaterialTopComponent,
        MaterialHomeComponent,
        MaterialActivateDialogComponent
    ],
    entryComponents: [
        MaterialActivateDialogComponent
    ],
    providers: [
        MaterialService
    ]
})
export class MaterialCoreModule { }