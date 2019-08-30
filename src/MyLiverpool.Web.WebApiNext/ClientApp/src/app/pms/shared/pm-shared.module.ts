import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { PmReplyComponent } from './pm-reply';
import { EditorModule } from '@app/editor';
import { MatInputModule } from '@angular/material/input';
import { PmService } from '../pm.service';

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
