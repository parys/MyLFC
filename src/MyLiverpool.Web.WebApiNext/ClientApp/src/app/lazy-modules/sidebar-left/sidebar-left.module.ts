import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
    SidebarLeftComponent,
    EplTableComponent,
    MatchCalendarComponent,
    MatchCalendarEntryComponent,
    PersonBirthdayComponent,
    BestPlayerComponent,
    InjuryCurrentListComponent,
    CupTableComponent
} from './components';
import { LeftSidebarMaterialModule } from './sidebar-left-material.module';
import { SidebarLeftService } from './sidebar-left.service';
import { PipesModule } from '@base/pipes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LeftSidebarMaterialModule,
        PipesModule
    ],
    declarations: [
        MatchCalendarComponent,
        BestPlayerComponent,
        MatchCalendarEntryComponent,
        PersonBirthdayComponent,
        InjuryCurrentListComponent,
        CupTableComponent,
        EplTableComponent,
        SidebarLeftComponent
    ],
    providers: [
        SidebarLeftService
    ],
    entryComponents: [
        SidebarLeftComponent
    ]
})
export class SidebarLeftModule {
    static dynamicComponentsMap = {
        SidebarLeftComponent
    };
}
