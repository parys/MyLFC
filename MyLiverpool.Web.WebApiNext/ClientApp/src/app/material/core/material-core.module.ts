import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { MaterialListComponent } from "./material-list";
import { MaterialLatestComponent } from "./material-latest";
import { MaterialActivateDialogComponent } from "./material-activate-dialog";
import { MaterialService } from "./material.service";
import { MatchCoreModule } from "@app/match";
import { MaterialTopComponent } from './material-top';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        MatchCoreModule
    ],
    declarations: [
        MaterialLatestComponent,
        MaterialTopComponent,
        MaterialListComponent,
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