import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
    MatchCalendarComponent,
    MatchCalendarEntryComponent,
    PersonBirthdayComponent,
    BestPlayerComponent,
    UserBirthdayComponent,
    UserOnlineCounterComponent,
    CommentLastComponent,
    InjuryCurrentListComponent,
    CupTableComponent,
    EplTableComponent
} from '@layout/components/';
import { LayoutService } from '@layout/layout.service';
import { PipesModule } from '@base/pipes';
import { LayoutMaterialModule } from './layout-material.module';

const layoutComponents = [
    MatchCalendarEntryComponent,
    MatchCalendarComponent,
    BestPlayerComponent,
    PersonBirthdayComponent,
    UserBirthdayComponent,
    UserOnlineCounterComponent,
    CommentLastComponent,
    InjuryCurrentListComponent,
    CupTableComponent,
    EplTableComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutMaterialModule,
        PipesModule,
        MatTooltipModule
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
