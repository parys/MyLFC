import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { EditorModule } from '@editor/index';

import { PmService } from '@pms/pm.service';
import { PmReplyComponent } from '@pms/shared/pm-reply';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EditorModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        PmReplyComponent
    ],
    exports: [
        PmReplyComponent
    ],
    providers: [
        PmService
    ]
})
export class PmSharedModule { }
