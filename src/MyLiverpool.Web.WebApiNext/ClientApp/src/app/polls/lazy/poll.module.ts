import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { BreadcrumbService } from '@base/breadcrumbs';
import { POLLS_ROUTE } from '@constants/routes.constants';

import { pollRoutes } from '@polls/lazy/poll.routes';
import { PollCoreModule } from '@polls/core';
import { PollListComponent } from '@polls/lazy/poll-list';
import { PollDetailComponent } from '@polls/lazy/poll-detail';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pollRoutes),
        PollCoreModule,
        MatInputModule
    ],
    declarations: [
        PollListComponent,
        PollDetailComponent
    ]
})
export class PollModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRoute(`/${POLLS_ROUTE}`, 'Опросы');
        this.breadcrumbService.addFriendlyNameForRoute(`^/${POLLS_ROUTE}/[0-9]+$`, 'Опрос');
    }
}
