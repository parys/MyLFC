import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/index';
import { PollService } from '@polls/core/poll.service';
import { pollCoreRoutes } from '@polls/core/poll.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(pollCoreRoutes)
    ],
    declarations: [
    ],
    exports: [
    //    NgxChartsModule
    ],
    providers: [
        PollService
    ]
})
export class PollCoreModule { }
