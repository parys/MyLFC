import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {
    MatchCalendarComponent,
    MatchCalendarEntryComponent,
    MatchHeaderComponent,
    NotificationCounterComponent,
    PersonBirthdayComponent,
    BestPlayerComponent,
    UserBirthdayComponent,
    UserOnlineCounterComponent,
    PmCounterComponent,
    CommentLastComponent,
    InjuryCurrentListComponent,
    CupTableComponent,
    EplTableComponent
} from '@layout/components/';
import { LayoutService } from '@layout/layout.service';
import { PipesModule } from '@base/pipes';

const matModules = [
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,

];

const layoutComponents = [
    NotificationCounterComponent,
    MatchCalendarEntryComponent,
    MatchCalendarComponent,
    MatchHeaderComponent,
    BestPlayerComponent,
    PersonBirthdayComponent,
    UserBirthdayComponent,
    UserOnlineCounterComponent,
    PmCounterComponent,
    CommentLastComponent,
    InjuryCurrentListComponent,
    CupTableComponent,
    EplTableComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...matModules,
        PipesModule
    ],
    declarations: [
        ...layoutComponents
    ],
    exports: [
        ...layoutComponents
    ],
    providers: [
        LayoutService
    ]
})
export class LayoutModule { }
