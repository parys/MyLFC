import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared';
import { MaterialActivateDialogComponent } from './material-activate-dialog';
import { MaterialService } from './material.service';
import { MatchCoreModule } from '@matches/core';
import { MaterialHomeComponent } from './material-home';
import { MaterialItemComponent } from './material-item';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        MatchCoreModule
    ],
    declarations: [
        MaterialHomeComponent,
        MaterialActivateDialogComponent,
        MaterialItemComponent
    ],
    entryComponents: [
        MaterialActivateDialogComponent
    ],
    providers: [
        MaterialService
    ]
})
export class MaterialCoreModule { }
