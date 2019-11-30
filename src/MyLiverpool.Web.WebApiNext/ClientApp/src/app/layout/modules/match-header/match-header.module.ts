import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatchHeaderComponent } from './match-header.component';
import { PipesModule } from '@base/pipes';
import { MatchHeaderService } from './match-header.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PipesModule
    ],
    declarations: [
        MatchHeaderComponent
    ],
    exports: [
        MatchHeaderComponent
    ],
    providers: [
        MatchHeaderService
    ]
})
export class MatchHeaderModule { }
