import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatDialogModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatButtonModule } from '@angular/material';

import { ConfirmationComponent, NoticeComponent, NotifierComponent } from '@notices/components';
import { NotifierService } from '@notices/services';


@NgModule({
    declarations: [
        NotifierComponent,
        ConfirmationComponent,
        NoticeComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports: [
        NotifierComponent
    ],
    entryComponents: [
        NoticeComponent,
        ConfirmationComponent,
    ],
    providers: [
        NotifierService,
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center', panelClass: [ 'system-notification-container' ]  }
        }
    ]
})
export class NoticesModule { }
