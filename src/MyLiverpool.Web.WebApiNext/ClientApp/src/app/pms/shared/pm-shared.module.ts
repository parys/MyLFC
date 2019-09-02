import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '@shared/index';
import { EditorModule } from '@editor/index';

import { PmService } from '@pms/pm.service';
import { PmReplyComponent } from '@pms/shared/pm-reply';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        EditorModule,
        MatInputModule
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
