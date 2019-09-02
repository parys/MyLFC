import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/index';
import { seasonCoreRoutes } from '@seasons/core/season-core.routes';
import { SeasonService } from '@seasons/core/season.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(seasonCoreRoutes)
    ],
    exports: [
        RouterModule
        ],
    providers: [
        SeasonService
    ]
})
export class SeasonCoreModule { }
