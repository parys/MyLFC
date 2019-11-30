import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { pollEditRoutes } from '@polls/lazy/+poll-edit/poll-edit.routes';
import { PollCoreModule } from '@polls/core/poll-core.module';
import { PollEditComponent } from '@polls/lazy/+poll-edit/poll-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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