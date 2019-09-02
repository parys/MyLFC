import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '@shared/index';

import { pollEditRoutes } from '@polls/lazy/+poll-edit/poll-edit.routes';
import { PollCoreModule } from '@polls/core/poll-core.module';
import { PollEditComponent } from '@polls/lazy/+poll-edit/poll-edit.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(pollEditRoutes),
        PollCoreModule,
        MatInputModule
      //  ImageCoreModule
    ],
    declarations: [
        PollEditComponent
    ],
    providers: [
    ]
})
export class PollEditModule { }