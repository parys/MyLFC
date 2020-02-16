import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { MatchHeaderComponent } from './match-header/match-header.component';
import { PipesModule } from '@base/pipes';
import { MobileLayoutService } from './mobile-layout.service';
import { PmCounterComponent } from './pm-counter';
import { NotificationCounterComponent } from './notification-counter';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PipesModule,
        MatBadgeModule,
        MatIconModule
    ],
    declarations: [
        MatchHeaderComponent,
        PmCounterComponent,
        NotificationCounterComponent,
    ],
    exports: [
        MatchHeaderComponent,
        PmCounterComponent,
        NotificationCounterComponent,
    ],
    providers: [
        MobileLayoutService
    ]
})
export class MobileLayoutModule { }
