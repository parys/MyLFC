import { NgModule } from '@angular/core';
import { MatBadgeModule, MatIconModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
    MatchCalendarComponent,
    MatchCalendarEntryComponent,
    MatchHeaderComponent,
    NotificationCounterComponent,
    PersonBirthdayComponent,
    BestPlayerComponent,
    UserBirthdayComponent,
    UserOnlineCounterComponent,
    PmCounterComponent
} from './components/';
import { LayoutService } from './layout.service';
import { } from './components';
import { PipesModule } from '@app/base/pipes';

const matModules = [
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
    PmCounterComponent
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
