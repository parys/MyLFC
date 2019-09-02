import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SharedModule } from '@shared/index';
import { MatchEventEditPanelComponent } from '@match-events/shared/matchEvent-edit-panel';
import { MatchEventMatchPanelComponent } from '@match-events/shared/matchEvent-match-panel';
import { MatchEventCoreModule } from '@match-events/core';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatInputModule,
        MatSlideToggleModule,
        MatchEventCoreModule
    ],
    declarations: [
        MatchEventEditPanelComponent,
        MatchEventMatchPanelComponent
    ],
    exports: [
        MatchEventEditPanelComponent,
        MatchEventMatchPanelComponent
    ]
})
export class MatchEventModule { }
